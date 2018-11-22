import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ProveedorListComponent } from '../proveedor/proovedor-list/proovedor-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component'

import { ValoracionListComponent } from '../valoracion/valoracion-list/valoracion-list.component';
import { ValoracionDetailComponent } from '../valoracion/valoracion-detail/valoracion-detail.component'

import { SugerenciaListComponent } from '../sugerencia/sugerencia-list/sugerencia-list.component';
import { SugerenciaDetailComponent } from '../sugerencia/sugerencia-detail/sugerencia-detail.component'

import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { FechaListComponent } from '../fecha/fecha-list/fecha-list.component';
import { FechaDetailComponent } from '../fecha/fecha-detail/fecha-detail.component';

import { ProductoListComponent } from '../producto/producto-list/producto-list.component';
import { ProductoDetailComponent } from '../producto/producto-detail/producto-detail.component';

import {NotificacionListComponent} from '../notificacion/notificacion-list/notificacion-list.component';
import {NotificacionDetailComponent} from '../notificacion/notificacion-detail/notificacion-detail.component';
import {TematicaListComponent} from '../tematica/tematica-list/tematica-list.component';
import {TematicaDetailComponent} from '../tematica/tematica-detail/tematica-detail.component';
import {ServicioListComponent} from '../servicio/servicio-list/servicio-list.component';
import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';
import { EventoListComponent } from '../evento/evento-list/evento-list.component';
import { EventoDetailComponent } from '../evento/evento-detail/evento-detail.component';
import { ServicioDetailComponent } from '../servicio/servicio-detail/servicio-detail.component';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

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
        path: 'producto',
        children: [
            {
                path: 'list',
                component: ProductoListComponent,
                pathMatch: 'full'

            },
            {
                path: ':nombre',
                component: ProductoDetailComponent,

            }
        ]
    },

    {
        path: 'evento',
        children: [
            {
                path: 'list',
                component: EventoListComponent,
                pathMatch: 'full'

            },
            {
                path: ':nombre',
                component: EventoDetailComponent,
    
            }

        ]

    }
    ,
    {
        path: 'proveedor',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
            },
            {
                path: ':id',
                component: ProveedorDetailComponent
            },{
           path: ':id/valoracion' ,
           children: [
            {
                path: 'list',
                component: ValoracionListComponent,

               

            },
            {
                
                                path: ':idValoracion',
                                component: ValoracionDetailComponent,
                                pathMatch: 'full',
                            
            }
              ]
             },
            {
                path: 'agenda',
                children: [
                    {
                        path: ':id',
                        component: AgendaDetailComponent,
                        pathMatch: 'full',
                    },
                    {
                        path: ':id/fecha',
                        children: [
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
        path: 'servicio',
        children: [
            {
                path: 'list',
                component: ServicioListComponent,

                pathMatch: 'full'

            },
            {
                path: ':idServicio',
                component: ServicioDetailComponent,
                pathMatch:'full'
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
            },{
           path: ':id/sugerencia' ,
           children: [
            {
                path: 'list',
                component: SugerenciaListComponent,

               

            },
            {
                
                                path: ':idSugerencia',
                                component: SugerenciaDetailComponent,
                                pathMatch: 'full',
                            
            }
              ]
             }
        ]
    },
    {
        path: 'notificacion',
        children: [
            {
                path: 'list',
                component: NotificacionListComponent
            },
            {
                path: ':id',
                component: NotificacionDetailComponent
            }
        ]
    }
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
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
