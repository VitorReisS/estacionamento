import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../../services/pagamento.service';
import { FuncionarioService } from '../../services/funcionario.service';
import { VeiculoService } from '../../services/veiculo.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent implements OnInit {

  constructor(
    private pagamentoSrv: PagamentoService,
    private funcionarioSrv: FuncionarioService,
    private veiculoSrv: VeiculoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public pagamento: any = {};
  public funcionarios: any = [];
  public veiculos: any = [];
  //selectedLanguage: any = {};
  public titulo: String = 'Novo Pagamento';

  progLang = [
    { tipo_pagamento: "Credito" },
    { tipo_pagamento: "Debito" },
    { tipo_pagamento: "Dinheiro" }
  ];

  ngOnInit() {

    console.log(this.progLang);

    this.actRoute.params.subscribe(
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.pagamentoSrv.obterUm(params.id).subscribe(
            dados => {
              this.pagamento = dados;
              console.log(this.pagamento);
              this.titulo = 'Alterar pagamento';
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    this.funcionarioSrv.listar().subscribe(
      dados => {
        this.funcionarios = dados;
        console.log(this.funcionarios);
      },
      erro => console.error(erro)
    );

    this.veiculoSrv.listar().subscribe(
      dados => {
        this.veiculos = dados;
        console.log(this.veiculos);
      },
      erro => console.error(erro)
    );

  }

  salvar() {
    let observ: any;
    if (this.pagamento._id) { // pagamento já existe (edição)
      observ = this.pagamentoSrv.alterar(this.pagamento);
    } else { // pagamento não existe (novo)
      observ = this.pagamentoSrv.novo(this.pagamento);
    }
    observ.subscribe(
      () => {
        // alert('pagamento salvo com sucesso');
        this.snackBar.open('pagamento salvo com sucesso', 'OK',
          { duration: 2000 });
        this.router.navigate(['pagamento']);
      },
      erro => {
        console.error(erro);
        this.snackBar.open('Erro ao salvar o pagamento: ' + erro.message, 'OK');
      }
    );
  }
  
  cancelar() {
    if (confirm('Deseja realmente cancelar a edição e voltar? ' +
      'As alterações NÃO serão salvas!')) {
      this.router.navigate(['pagamento']);
    }
  }

}
