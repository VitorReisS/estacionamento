import { Component, OnInit } from '@angular/core';

import { PagamentoService } from '../../services/pagamento.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pagamento-list',
  templateUrl: './pagamento-list.component.html',
  styleUrls: ['./pagamento-list.component.css']
})
export class PagamentoListComponent implements OnInit {

  public pagamentos: any;

  constructor(
    private pagamentoSrv: PagamentoService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'funcionario',
    'veiculo',
    'data_pagamento',
    'status',
    'excluir'
  ];

  ngOnInit() {
    this.pagamentoSrv.listar().subscribe(
      dados => this.pagamentos = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este pagamento?')) {
      this.pagamentoSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('Pagamento excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE PAGAMENTO: ' + erro.message, 'OK')
      );
    }
  }

}
