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
import { ProductoModule } from '../producto/producto.module';
import { ValoracionModule } from '../valoracion/valoracion.module';
import { ProveedorEditComponent} from './proveedor-edit/proveedor-edit.component';
@NgModule({
  imports: [

        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        AgendaModule,
        ValoracionModule,
        ProductoModule
     
  ],
  declarations: [
    ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent, ProveedorEditComponent
  ],
  providers: [ProveedorService] ,
  exports: [
    ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent
  ] 
})
export class ProveedorModule { }
