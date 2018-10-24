import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';

import {ProductoListComponent} from '../producto/producto-list/producto-list.component';



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
