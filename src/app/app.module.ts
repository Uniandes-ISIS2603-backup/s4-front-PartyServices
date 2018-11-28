
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
import { ProveedorModule } from './proveedor/proveedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { ValoracionModule } from './valoracion/valoracion.module';
import { TematicaModule } from './tematica/tematica.module';
import { ServicioModule } from './servicio/servicio.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventoModule } from './evento/evento.module' ;
import {NgxPermissionsModule} from 'ngx-permissions';
import {AuthModule} from './auth/auth.module';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ModalDialogInstanceService } from 'ngx-modal-dialog/src/modal-dialog-instance.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductoModule,
    ClienteModule,
    ProveedorModule,
    NotificacionModule,
    HttpClientModule,
    AgendaModule,
    FechaModule,
    AuthModule,
    ValoracionModule,
    TematicaModule,
    ServicioModule,
    EventoModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPermissionsModule.forRoot(),
    NgbModule,
    ModalDialogModule.forRoot()

  ],
  bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            
            multi: true
        },ModalDialogInstanceService
    ]
})
export class AppModule { }
