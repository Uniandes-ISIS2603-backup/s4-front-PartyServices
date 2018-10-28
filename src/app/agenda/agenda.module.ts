import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AgendaDetailComponent],
  exports: [AgendaDetailComponent]
})
export class AgendaModule { }
