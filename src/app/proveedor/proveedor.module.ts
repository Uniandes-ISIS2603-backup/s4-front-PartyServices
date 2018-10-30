import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proovedor-list/proovedor-list.component';
import { ProveedorService} from './proveedor.service' ;


@NgModule({
  imports: [

    CommonModule
     
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
