import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugerenciaListComponent } from './sugerencia-list/sugerencia-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SugerenciaService} from './sugerencia.service' ;
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SugerenciaDetailComponent } from './sugerencia-detail/sugerencia-detail.component';
import { SugerenciaCreateComponent } from './sugerencia-create/sugerencia-create.component';
import { SugerenciaEditComponent } from './sugerencia-edit/sugerencia-edit.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
   SugerenciaListComponent, SugerenciaDetailComponent, SugerenciaCreateComponent, SugerenciaEditComponent
  ],providers: [SugerenciaService] ,
  exports: [
    SugerenciaListComponent,SugerenciaDetailComponent, SugerenciaCreateComponent, SugerenciaEditComponent
  ] 
})
export class SugerenciaModule { }
