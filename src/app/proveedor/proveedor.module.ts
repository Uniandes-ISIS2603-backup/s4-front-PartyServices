import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorService} from './proveedor.service' ;


@NgModule({
  imports: [

    CommonModule
     
  ],
  declarations: [
    ProveedorListComponent
  ],
  providers: [proveedorService] ,
  exports: [
    ProveedorListComponent
  ] 
})
export class ProveedorModule { }
