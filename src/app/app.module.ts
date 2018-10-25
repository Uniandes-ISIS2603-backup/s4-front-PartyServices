
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoModule } from './producto/producto.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';

import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AgendaModule } from './agenda/agenda.module';
import { FechaModule } from './fecha/fecha.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { ValoracionModule } from './valoracion/valoracion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    ClienteModule,
    HttpClientModule,
    AgendaModule,
    FechaModule,
    ValoracionModule,
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
