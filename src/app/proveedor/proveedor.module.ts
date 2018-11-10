import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proovedor-list/proovedor-list.component';
import { ProveedorService} from './proveedor.service' ;
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaModule } from '../agenda/agenda.module';

@NgModule({
  imports: [

        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        AgendaModule
     
  ],
  declarations: [
    ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent
  ],
  providers: [ProveedorService] ,
  exports: [
    ProveedorListComponent
  ] 
})
export class ProveedorModule { }
