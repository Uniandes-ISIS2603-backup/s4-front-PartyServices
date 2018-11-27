
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ValoracionModule } from '../valoracion/valoracion.module';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ValoracionModule

  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent],
  providers: [ClienteService],
  exports:[ClienteListComponent],
})
export class ClienteModule { }
