import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {TematicaListComponent} from './tematica-list/tematica-list.component';
import {TematicaService} from './tematica.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {TematicaDetailComponent} from './tematica-detail/tematica-detail.component';
import {TematicaCreateComponent} from './tematica-create/tematica-create.component';
import {TematicaEditComponent} from './tematica-edit/tematica-edit.component';
//import {ServicioModule} from '../servicio/servicio.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
        //ServicioModule
    ],
    declarations: [TematicaListComponent, TematicaDetailComponent, TematicaCreateComponent, TematicaEditComponent],
    providers: [TematicaService]
})
export class TematicaModule {}
