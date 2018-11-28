import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../../services/funcionario.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  public funcionarios: any;

  constructor(
    private funcionarioSrv: FuncionarioService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'nome',
    'data_nasci',
    'cpf',
    'email',
    'excluir'
  ];

  ngOnInit() {
    this.funcionarioSrv.listar().subscribe(
      dados => this.funcionarios = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este funcionario?')) {
      this.funcionarioSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('funcionario excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE FUNCIONARIO: ' + erro.message, 'OK')
      );
    }
  }

}
