import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ProveedorListComponent} from '../proveedor/proovedor-list/proovedor-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component'

import {ValoracionListComponent} from '../valoracion/valoracion-list/valoracion-list.component';


import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { FechaListComponent } from '../fecha/fecha-list/fecha-list.component';
import { FechaDetailComponent } from '../fecha/fecha-detail/fecha-detail.component';

import {ProductoListComponent} from '../producto/producto-list/producto-list.component';
import { ProductoDetailComponent } from '../producto/producto-detail/producto-detail.component';


import {TematicaListComponent} from '../tematica/tematica-list/tematica-list.component';
import {TematicaDetailComponent} from '../tematica/tematica-detail/tematica-detail.component';
import {ServicioListComponent} from '../servicio/servicio-list/servicio-list.component';

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

            },
            {
                path: ':nombre' ,
                component: ProductoDetailComponent,
                
            }
        ]
    },
    {
        path: 'proveedor' ,
        children: [
            {
                path: 'list',
                component: ProveedorListComponent,
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
        path: 'tematica',
        children: [
            {
                path: 'list',
                component: TematicaListComponent
            },
            {
                path: ':id',
                component: TematicaDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    }
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
