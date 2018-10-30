import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValoracionListComponent } from './valoracion-list/valoracion-list.component';
import { ValoracionService} from './valoracion.service' ;


@NgModule({
  imports: [

    CommonModule
     
  ],
  declarations: [
   ValoracionListComponent
  ],
  providers: [ValoracionService] ,
  exports: [
    ValoracionListComponent
  ] 
})
export class ValoracionModule { }
