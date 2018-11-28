import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/registro');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/registro/' + id);
  }

  novo(registro) {
    return this.http.put('http://localhost:3000/registro', registro);
  }

  alterar(registro) {
    return this.http.patch('http://localhost:3000/registro', registro);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/registro/' + id);
  }
}
