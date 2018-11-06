import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proovedor-list/proovedor-list.component';
import { ProveedorService} from './proveedor.service' ;
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  imports: [

    CommonModule,
    AppRoutingModule
     
  ],
  declarations: [
    ProveedorListComponent
  ],
  providers: [ProveedorService] ,
  exports: [
    ProveedorListComponent
  ] 
})
export class ProveedorModule { }
