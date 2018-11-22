
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProveedorService} from '../proveedor.service';
import {Proveedor} from '../proveedor';
import {ProveedorDetail} from '../proveedor-detail';


@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

/**
* Constructor for the component
* @param route The route which helps to retrieves the id of the proveedor to be shown
* @param clienteService The proveedor's services provider
* @param toastrService The toastr to show messages to the user
*/
  constructor(
    private route: ActivatedRoute,
    private proveedorService:ProveedorService
  ) { }
  
  /**
    * El proveedor
    */
    proveedorDetail: ProveedorDetail;
    
   /**
    * El id del proveedor que viene en el path get .../proveedor/proveedor_id
    */
    proveedor_Id: number;
    
      showEdit : boolean;
    
    /**
    * The method which obtains the proveedor whose details we want to show
    */
    getProveedorDetail():void{
        this.proveedorService.getProveedorDetail(this.proveedor_Id)
            .subscribe(proveedorDetail => {
                this.proveedorDetail = proveedorDetail;
        });
    }
    
         showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    



    /**
    * The method which initializes the component.
    * We need to create the cliente so it is never considered as undefined
    */
  ngOnInit() {
      
      this.showEdit=false;
      this.proveedor_Id = +this.route.snapshot.paramMap.get('id');
      this.proveedorDetail = new ProveedorDetail();
      this.getProveedorDetail();
  }
  
   showHideEdit():void{
    this.showEdit=!this.showEdit;
  }

  actualizarProveedor(): void {
    this.showEdit=!this.showEdit;
  }

  cancelarEdicion():void {
    this.showHideEdit();
    this.proveedor=new Proveedor();
    this.getProveedor();
  }

}
