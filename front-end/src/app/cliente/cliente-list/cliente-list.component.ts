import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes: any;

  constructor(
    private clienteSrv: ClienteService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'nome',
    'data_nasci',
    'cpf',
    'rg',
    'nome_rua',
    'num_casa',
    'excluir'
  ];

  ngOnInit() {
    this.clienteSrv.listar().subscribe(
      dados => this.clientes = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.clienteSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('Cliente excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE CLIENTE: ' + erro.message, 'OK')
      );
    }
  }

}
