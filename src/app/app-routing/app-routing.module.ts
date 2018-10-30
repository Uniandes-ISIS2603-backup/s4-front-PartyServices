import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProductoListComponent} from '../producto/producto-list/producto-list.component';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { FechaListComponent } from '../fecha/fecha-list/fecha-list.component';
import { FechaDetailComponent } from '../fecha/fecha-detail/fecha-detail.component';



const routes: Routes = [

    {
        path: 'clientes', 
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            }
        ]
        
    },
    {
        path: 'producto' ,
        children: [
            {
                path: 'list',
                component: ProductoListComponent,
                pathMatch: 'full'

            }
        ]
    },
    {
        path: 'proveedor' ,
        children: [
            {
                path: 'list',
                component: ProveedorListComponent,
                pathMatch: 'full'

            }
        ]
    },
    {
        path: 'agenda' ,
        children: [
            {
                path: ':id',
                component: AgendaDetailComponent,
                pathMatch: 'full',
            },
            {
                path: ':id/fechas',
                component: FechaListComponent,
                pathMatch: 'full',
            },
            {
                path: ':id/fecha/:idFecha',
                component: FechaDetailComponent,
                pathMatch: 'full',
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
