import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Proveedor} from '../../proveedor/proveedor' ;
import {ProveedorService} from '../../proveedor/proveedor.service' ;
@Component({
  selector: 'app-proovedor-list',
  templateUrl: './proovedor-list.component.html',
  styleUrls: ['./proovedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private proveedorService: ProveedorService) { }
   
   showCreate: boolean;
   edit: boolean;
   /**
    * The list of proveedores to display
    */
  proveedores: Proveedor[] ;



  getProveedores(): void{
    this.proveedorService.getProveedores()
    .subscribe(proveedores =>{this.proveedores = proveedores}) ;
  }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

  ngOnInit() {
      
    this.showCreate = false;
    this.getProveedores() ;
    this.showEdit = false;

  }
  
  showEdit():void{
      this.edit = !this.edit;
  }
  

}
