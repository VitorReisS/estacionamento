import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/funcionario');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/funcionario/' + id);
  }

  novo(funcionario) {
    return this.http.put('http://localhost:3000/funcionario', funcionario);
  }

  alterar(funcionario) {
    return this.http.patch('http://localhost:3000/funcionario', funcionario);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/funcionario/' + id);
  }
}
