import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/veiculo');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/veiculo/' + id);
  }

  novo(veiculo) {
    return this.http.put('http://localhost:3000/veiculo', veiculo);
  }

  alterar(veiculo) {
    return this.http.patch('http://localhost:3000/veiculo', veiculo);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/veiculo/' + id);
  }
}
