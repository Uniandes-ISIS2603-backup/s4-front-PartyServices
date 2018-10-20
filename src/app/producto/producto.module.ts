import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoListComponent],
  exports: [ProductoListComponent] 
})
export class ProductoModule { }
