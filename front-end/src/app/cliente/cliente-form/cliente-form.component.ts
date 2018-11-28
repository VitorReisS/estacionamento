import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(
    private clienteSrv: ClienteService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  public cliente: any = {};
  public titulo: String = 'Novo Cliente';

  ngOnInit() {

    this.actRoute.params.subscribe(
      params => {
        if (params.id) { // Se existir um parâmetro chamado id
          // Aciona o serviço para buscar dados no back-end
          this.clienteSrv.obterUm(params.id).subscribe(
            dados => {
              this.cliente = dados;
              console.log(this.cliente);
              this.titulo = 'Alterar cliente';
            }, // Callback se OK
            erro => console.error(erro) // Callback se erro
          );
        }
      }
    );

  }

  salvar() {
    let observ: any;
    if (this.cliente._id) { // cliente já existe (edição)
      observ = this.clienteSrv.alterar(this.cliente);
    } else { // cliente não existe (novo)
      observ = this.clienteSrv.novo(this.cliente);
    }
    observ.subscribe(
      () => {
        // alert('cliente salvo com sucesso');
        this.snackBar.open('cliente salvo com sucesso', 'OK',
          { duration: 2000 });
        this.router.navigate(['cliente']);
      },
      erro => {
        console.error(erro);
        this.snackBar.open('Erro ao salvar o cliente: ' + erro.message, 'OK');
      }
    );
  }
  
  cancelar() {
    if (confirm('Deseja realmente cancelar a edição e voltar? ' +
      'As alterações NÃO serão salvas!')) {
      this.router.navigate(['cliente']);
    }
  }

}
