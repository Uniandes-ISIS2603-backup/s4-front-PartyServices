import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TematicaListComponent } from './tematica-list/tematica-list.component';
import { TematicaService} from './tematica.service' ;


@NgModule({
  imports: [

    CommonModule
     
  ],
  declarations: [
    TematicaListComponent
  ],
  providers: [TematicaService] ,
  exports: [
    TematicaListComponent
  ] 
})
export class TematicaModule { }
