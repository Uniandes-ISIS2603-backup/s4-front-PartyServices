import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ProveedorListComponent} from '../proveedor/proovedor-list/proovedor-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component'

import {ValoracionListComponent} from '../valoracion/valoracion-list/valoracion-list.component';

import {ProductoListComponent} from '../producto/producto-list/producto-list.component';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { FechaListComponent } from '../fecha/fecha-list/fecha-list.component';
import { FechaDetailComponent } from '../fecha/fecha-detail/fecha-detail.component';

import {TematicaListComponent} from '../tematica/tematica-list/tematica-list.component';
import {ServicioListComponent} from '../servicio/servicio-list/servicio-list.component';
import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';

const routes: Routes = [

    {
        path: 'clientes', 
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
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
        path: 'proveedores' ,
        children: [
            {
                path: 'list',
                component: ProveedorListComponent,
            },
            {
                path: ':id',
                component: ProveedorDetailComponent
            }
        ]
        },
        {
        path: 'valoracion' ,
        children: [
            {
                path: 'list',
                component: ValoracionListComponent,

                pathMatch: 'full'

            }
        ]
    },
    {
        path: 'tematica' ,
        children: [
            {
                path: 'list',
                component: TematicaListComponent,
                pathMatch: 'full'

            }
        ]
    },
    {
        path: 'servicio' ,
        children: [
            {
                path: 'list',
                component: ServicioListComponent,
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
                path: ':id/fecha',
                children:[
                    {
                        path: 'list',
                        component: FechaListComponent,
                         pathMatch: 'full'
                    },
                    {
                        path: ':idFecha',
                        component: FechaDetailComponent,
                        pathMatch: 'full',
                    }
                ],
                
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
