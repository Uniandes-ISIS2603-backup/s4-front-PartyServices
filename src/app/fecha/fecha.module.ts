import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaListComponent } from './fecha-list/fecha-list.component';
import { FechaDetailComponent } from './fecha-detail/fecha-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { FechaCreateComponent } from './fecha-create/fecha-create.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { FechaDiaComponent } from './fecha-dia/fecha-dia.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [FechaListComponent, FechaDetailComponent, FechaCreateComponent, FechaDiaComponent],
  exports: [FechaListComponent, FechaDetailComponent]
})
export class FechaModule { }
