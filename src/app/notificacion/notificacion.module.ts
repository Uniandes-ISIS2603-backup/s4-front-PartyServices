import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionListComponent } from './notificacion-list/notificacion-list.component';
import { NotificacionService} from './notificacion.service' ;
import { NotificacionDetailComponent } from './notificacion-detail/notificacion-detail.component';
import { NotificacionCreateComponent } from './notificacion-create/notificacion-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [

        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
     
  ],
  declarations: [
    NotificacionListComponent, NotificacionDetailComponent, NotificacionCreateComponent
  ],
  providers: [NotificacionService] ,
  exports: [
    NotificacionListComponent, NotificacionDetailComponent
  ] 
})
export class NotificacionModule { }
