import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  constructor(
    private registroSrv: RegistroService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public registro: any = {};
  public titulo: String = 'Novo Registro';

  ngOnInit() {

    this.actRoute.params.subscribe(
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.registroSrv.obterUm(params.id).subscribe(
            dados => {
              this.registro = dados;
              console.log(this.registro);
              this.titulo = 'Alterar registro';
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

    }

    salvar() {
      let observ: any;
      if (this.registro._id) { // registro já existe (edição)
        observ = this.registroSrv.alterar(this.registro);
      } else { // registro não existe (novo)
        observ = this.registroSrv.novo(this.registro);
      }
      observ.subscribe(
        () => {
          // alert('registro salvo com sucesso');
          this.snackBar.open('registro salvo com sucesso', 'OK',
            { duration: 2000 });
          this.router.navigate(['registro']);
        },
        erro => {
          console.error(erro);
          this.snackBar.open('Erro ao salvar o registro: ' + erro.message, 'OK');
        }
      );
    }
    
    cancelar() {
      if (confirm('Deseja realmente cancelar a edição e voltar? ' +
        'As alterações NÃO serão salvas!')) {
        this.router.navigate(['registro']);
      }
    }

}
