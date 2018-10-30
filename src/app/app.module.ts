
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoModule } from './producto/producto.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';

import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AgendaModule } from './agenda/agenda.module';
import { FechaModule } from './fecha/fecha.module';
import { ProveedorModule } from './proveedor/proveedor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductoModule,
    ClienteModule,
    ProveedorModule,
    HttpClientModule,
    AgendaModule,
    FechaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
