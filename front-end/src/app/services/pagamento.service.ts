import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/pagamento');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/pagamento/' + id);
  }

  novo(pagamento) {
    return this.http.put('http://localhost:3000/pagamento', pagamento);
  }

  alterar(pagamento) {
    return this.http.patch('http://localhost:3000/pagamento', pagamento);
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/pagamento/' + id);
  }
}
