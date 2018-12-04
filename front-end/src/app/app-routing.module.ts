import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { PagamentoListComponent } from './pagamento/pagamento-list/pagamento-list.component';
import { PagamentoFormComponent } from './pagamento/pagamento-form/pagamento-form.component';
import { RegistroListComponent } from './registro/registro-list/registro-list.component';
import { RegistroFormComponent } from './registro/registro-form/registro-form.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';

const routes: Routes = [
  {
    path: 'cliente', component: ClienteListComponent
  },
  {
    path: 'cliente/novo', component: ClienteFormComponent
  },
  {
    path: 'cliente/:id', component: ClienteFormComponent
  },
  {
    path: 'funcionario', component: FuncionarioListComponent
  },
  {
    path: 'funcionario/novo', component: FuncionarioFormComponent
  },
  {
    path: 'funcionario/:id', component: FuncionarioFormComponent
  },
  {
    path: 'pagamento', component: PagamentoListComponent
  },
  {
    path: 'pagamento/novo', component: PagamentoFormComponent
  },
  {
    path: 'pagamento/:id', component: PagamentoFormComponent
  },
  {
    path: 'registro', component: RegistroListComponent
  },
  {
    path: 'registro/novo', component: RegistroFormComponent
  },
  {
    path: 'registro/:id', component: RegistroFormComponent
  },
  {
    path: 'veiculo', component: VeiculoListComponent
  },
  {
    path: 'veiculo/novo', component: VeiculoFormComponent
  },
  {
    path: 'veiculo/:id', component: VeiculoFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
