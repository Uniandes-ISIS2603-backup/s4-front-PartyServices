import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaListComponent } from './fecha-list/fecha-list.component';
import { FechaDetailComponent } from './fecha-detail/fecha-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FechaListComponent, FechaDetailComponent],
  exports: [FechaListComponent, FechaDetailComponent]
})
export class FechaModule { }
