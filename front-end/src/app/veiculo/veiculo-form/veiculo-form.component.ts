import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  constructor(
    private veiculoSrv: VeiculoService,
    private clienteSrv: ClienteService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public veiculo: any = {};
  public clientes: any = [];
  public titulo: String = 'Novo Veiculo';

  progLan = [
    { tipo_veicu: "Camionete" },
    { tipo_veicu: "Carro" },
    { tipo_veicu: "Moto" }
  ];

  ngOnInit() {

    console.log(this.progLan);

    this.actRoute.params.subscribe(
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.veiculoSrv.obterUm(params.id).subscribe(
            dados => {
              this.veiculo = dados;
              console.log(this.veiculo);
              this.titulo = 'Alterar veiculo';
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    this.clienteSrv.listar().subscribe(
      dados => {
        this.clientes = dados;
        console.log(this.clientes);
      },
      erro => console.error(erro)
    );

  }

  salvar() {
    let observ: any;
    if (this.veiculo._id) { // veiculo já existe (edição)
      observ = this.veiculoSrv.alterar(this.veiculo);
    } else { // veiculo não existe (novo)
      observ = this.veiculoSrv.novo(this.veiculo);
    }
    observ.subscribe(
      () => {
        // alert('veiculo salvo com sucesso');
        this.snackBar.open('veiculo salvo com sucesso', 'OK',
          { duration: 2000 });
        this.router.navigate(['veiculo']);
      },
      erro => {
        console.error(erro);
        this.snackBar.open('Erro ao salvar o veiculo: ' + erro.message, 'OK');
      }
    );
  }
  
  cancelar() {
    if (confirm('Deseja realmente cancelar a edição e voltar? ' +
      'As alterações NÃO serão salvas!')) {
      this.router.navigate(['veiculo']);
    }
  }

}