import { Component, OnInit } from '@angular/core';

import { RegistroService } from '../../services/registro.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  public registros: any;

  constructor(
    private registroSrv: RegistroService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'veiculo',
    'data_entrada',
    'hora_entrada',
    'data_saida',
    'hora_saida',
    'excluir'
  ];

  ngOnInit() {
    this.registroSrv.listar().subscribe(
      dados => this.registros = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este registro?')) {
      this.registroSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('registro excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE REGISTRO: ' + erro.message, 'OK')
      );
    }
  }

}
