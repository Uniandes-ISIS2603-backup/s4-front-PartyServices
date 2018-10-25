
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
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
<<<<<<< HEAD
import { ValoracionModule } from './valoracion/valoracion.module';
=======
>>>>>>> parent of 709ac792... Se solucionó el error que no dejaba instalar

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductoModule,
    ClienteModule,
    AgendaModule,
    FechaModule,
<<<<<<< HEAD
    ValoracionModule,
=======
>>>>>>> parent of 709ac792... Se solucionó el error que no dejaba instalar
    
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
