import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  constructor(
    private funcionarioSrv: FuncionarioService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public funcionario: any = {};
  public titulo: String = 'Novo Funcionario';

  ngOnInit() {

    this.actRoute.params.subscribe(
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.funcionarioSrv.obterUm(params.id).subscribe(
            dados => {
              this.funcionario = dados;
              console.log(this.funcionario);
              this.titulo = 'Alterar funcionario';
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

  }

  salvar() {
    let observ: any;
    if (this.funcionario._id) { // funcionario já existe (edição)
      observ = this.funcionarioSrv.alterar(this.funcionario);
    } else { // funcionario não existe (novo)
      observ = this.funcionarioSrv.novo(this.funcionario);
    }
    observ.subscribe(
      () => {
        // alert('funcionario salvo com sucesso');
        this.snackBar.open('funcionario salvo com sucesso', 'OK',
          { duration: 2000 });
        this.router.navigate(['funcionario']);
      },
      erro => {
        console.error(erro);
        this.snackBar.open('Erro ao salvar o funcionario: ' + erro.message, 'OK');
      }
    );
  }
  
  cancelar() {
    if (confirm('Deseja realmente cancelar a edição e voltar? ' +
      'As alterações NÃO serão salvas!')) {
      this.router.navigate(['funcionario']);
    }
  }

}
