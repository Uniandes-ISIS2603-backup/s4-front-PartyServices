import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValoracionListComponent } from './valoracion-list/valoracion-list.component';
import { ValoracionService} from './valoracion.service' ;
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [

    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
   ValoracionListComponent
  ],providers: [ValoracionService] ,
  exports: [
    ValoracionListComponent
  ] 
})
export class ValoracionModule { }
