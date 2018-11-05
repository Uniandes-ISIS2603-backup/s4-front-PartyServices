
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
import { ValoracionModule } from './valoracion/valoracion.module';
import { TematicaModule } from './tematica/tematica.module';
import { ServicioModule } from './servicio/servicio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductoModule,
    ClienteModule,
    AgendaModule,
    FechaModule,
    ValoracionModule,
    TematicaModule,
    ServicioModule,
    
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
