import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValoracionListComponent } from './valoracion-list/valoracion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ValoracionService} from './valoracion.service' ;
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValoracionDetailComponent } from './valoracion-detail/valoracion-detail.component';
import { ValoracionCreateComponent } from './valoracion-create/valoracion-create.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
  ValoracionListComponent, ValoracionDetailComponent, ValoracionCreateComponent
   ],
  providers: [ValoracionService],
  exports: [
    ValoracionListComponent,ValoracionDetailComponent, ValoracionCreateComponent
   ] 
})
export class ValoracionModule { }
