import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Proveedor} from '../../proveedor/proveedor' ;
import {ProveedorService} from '../../proveedor/proveedor.service' ;
@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {


   /**
    * The list of books to display
    */
  proveedores: Proveedor[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private proveedorService: ProveedorService) { }




  getProveedores(): void{
    this.proveedorService.getProveedores()
    .subscribe(proveedores =>{this.proveedores = proveedores}) ;
  }


  ngOnInit() {
    this.getProveedores() ;

  }

}
