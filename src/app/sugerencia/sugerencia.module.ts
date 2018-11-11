import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugerenciaListComponent } from './sugerencia-list/sugerencia-list.component';
import { SugerenciaService} from './sugerencia.service' ;
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SugerenciaDetailComponent } from './sugerencia-detail/sugerencia-detail.component';
import { SugerenciaCreateComponent } from './sugerencia-create/sugerencia-create.component';


@NgModule({
  imports: [

    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
   SugerenciaListComponent, SugerenciaDetailComponent, SugerenciaCreateComponent
  ],providers: [SugerenciaService] ,
  exports: [
    SugerenciaListComponent,SugerenciaDetailComponent, SugerenciaCreateComponent
  ] 
})
export class SugerenciaModule { }
