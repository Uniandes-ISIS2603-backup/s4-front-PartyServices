import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService} from './producto.service' ;
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [

    CommonModule,
    AppRoutingModule
     
  ],
  declarations: [
    ProductoListComponent
  ],
  providers: [ProductoService] ,
  exports: [
    ProductoListComponent
  ] 
})
export class ProductoModule { }
