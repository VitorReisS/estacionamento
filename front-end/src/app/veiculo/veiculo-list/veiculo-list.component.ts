import { Component, OnInit } from '@angular/core';

import { VeiculoService } from '../../services/veiculo.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  public veiculos: any;

  constructor(
    private veiculoSrv: VeiculoService,
    private snackBar: MatSnackBar
  ) { }

  public colunasVisiveis: string[] = [
    'cliente',
    'tipo_veicu',
    'placa_veicu',
    'excluir'
  ];

  ngOnInit() {
    this.veiculoSrv.listar().subscribe(
      dados => this.veiculos = dados,
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este veiculo?')) {
      this.veiculoSrv.excluir(id).subscribe(
        () => {
          this.snackBar.open('veiculo excluído com sucesso.', 'OK', {duration: 2000});
          this.ngOnInit(); // Recarrega a lista
        },
        erro => this.snackBar.open('ERRO AO EXLUIR ESTE VEICULO: ' + erro.message, 'OK')
      );
    }
  }

}
