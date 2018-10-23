import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgendaDetailComponent],
  exports: [AgendaDetailComponent]
})
export class AgendaModule { }
