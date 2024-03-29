import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from './evento.service';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [EventoListComponent, EventoDetailComponent, EventoCreateComponent, EventoEditComponent],
  providers: [EventoService],
  exports: [EventoListComponent, EventoDetailComponent, EventoCreateComponent]
})
export class EventoModule { }

