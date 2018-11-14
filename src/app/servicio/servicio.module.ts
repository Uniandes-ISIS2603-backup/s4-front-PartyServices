import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioService} from './servicio.service';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component' ;
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [

    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
     
  ],
  declarations: [
    ServicioListComponent,
    ServicioDetailComponent,
    ServicioCreateComponent
  ],
  providers: [ServicioService] ,
  exports: [
    ServicioListComponent
  ] 
})
export class ServicioModule { }
