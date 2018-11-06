import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioService} from './servicio.service' ;


@NgModule({
  imports: [

    CommonModule
     
  ],
  declarations: [
    ServicioListComponent
  ],
  providers: [ServicioService] ,
  exports: [
    ServicioListComponent
  ] 
})
export class ServicioModule { }
