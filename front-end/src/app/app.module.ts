import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ClienteService } from './services/cliente.service';
import { FuncionarioService } from './services/funcionario.service';
import { PagamentoService } from './services/pagamento.service';
import { RegistroService } from './services/registro.service';
import { VeiculoService } from './services/veiculo.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { PagamentoListComponent } from './pagamento/pagamento-list/pagamento-list.component';
import { RegistroListComponent } from './registro/registro-list/registro-list.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/**** Datas em português no MatDatepicker  ****/

// É preciso instalar os seguintes pacotes:
// yarn add @angular/material-moment-adapter moment

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
// import { MatNativeDateModule } from '@angular/material/core';
/**********************************************/

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { PagamentoFormComponent } from './pagamento/pagamento-form/pagamento-form.component';
import { RegistroFormComponent } from './registro/registro-form/registro-form.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';

// Habilitar formatação de data e moeda em português do Brasil
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteFormComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent,
    PagamentoListComponent,
    PagamentoFormComponent,
    RegistroListComponent,
    RegistroFormComponent,
    VeiculoListComponent,
    VeiculoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    /**** Datas em português no MatDatepicker  ****/
    // MatNativeDateModule
    MatMomentDateModule
    /**********************************************/
  ],
  providers: [
    ClienteService,
    FuncionarioService,
    PagamentoService,
    RegistroService,
    VeiculoService,
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
