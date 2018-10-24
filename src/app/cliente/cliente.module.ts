
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [ClienteListComponent],
  providers: [ClienteService],
  exports:[ClienteListComponent],
})
export class ClienteModule { }
