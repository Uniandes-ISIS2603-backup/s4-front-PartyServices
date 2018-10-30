
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgendaModule } from './agenda/agenda.module';
import { FechaModule } from './fecha/fecha.module';
<<<<<<< HEAD
import { ProveedorModule } from './proveedor/proveedor.module';
=======
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { ValoracionModule } from './valoracion/valoracion.module';
>>>>>>> df1a985f2ed0eb1ed088f990d466262ae7582ce1

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductoModule,
    ClienteModule,
<<<<<<< HEAD
    ProveedorModule,
    HttpClientModule,
=======
>>>>>>> df1a985f2ed0eb1ed088f990d466262ae7582ce1
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
  bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
