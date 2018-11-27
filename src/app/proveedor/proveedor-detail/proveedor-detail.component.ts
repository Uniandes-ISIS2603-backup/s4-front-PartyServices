
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProveedorService} from '../proveedor.service';
import {Proveedor} from '../proveedor';
import {ProveedorDetail} from '../proveedor-detail';
import {Producto} '../producto';

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
    proveedorDetail: Proveedor;
    
   /**
    * El id del proveedor que viene en el path get .../proveedor/proveedor_id
    */
    proveedor_Id: number;
    
      showEdit : boolean;
      
      showCreate : boolean;
      
      productos: Producto[];
      
    /**
    * The method which obtains the proveedor whose details we want to show
    */
    getProveedorDetail():void{
        this.proveedorService.getProveedorDetail(this.proveedor_Id)
            .subscribe(proveedorDetail => {
                this.proveedorDetail = proveedorDetail;
        });
    }
    
    getProductos(): void {
    this.proveedorService.getProductos()
      .subscribe(productos => { this.productos = productos });
  }
    
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    
    compare(string1: string, string2:string): boolean{
        console.log(string2);
        console.log(string1);
        if(string1 === string2)
        {
            return true;
        }
        else
        return false;
    }


    /**
    * The method which initializes the component.
    * We need to create the cliente so it is never considered as undefined
    */
  ngOnInit() {
      
      this.showEdit=false;
      this.showCreate=false;
      this.proveedor_Id = +this.route.snapshot.paramMap.get('id');
      this.proveedorDetail = new ProveedorDetail();
      this.getProveedorDetail();
      this.getProductos();
  }
  
showHideEdit(proveedor_Id): void {
        if (!this.showEdit || (this.showEdit && proveedor_Id != this.proveedorDetail.id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.proveedor_Id = proveedor_Id;
            this.proveedorDetail = new ProveedorDetail();
            this.getProveedorDetail();
        }
        else {
            this.showEdit = false;
        }
    }
    
   

  actualizarProveedor(): void {
    this.showEdit=!this.showEdit;
    this.ngOnInit();
  }

  cancelarEdicion():void {
    this.showHideEdit();
    this.proveedorDetail= new Proveedor();
    this.getProveedorDetail();
  }
  
  deleteProveedor(proveedorId: number): void {
      
      this.proveedorService.deleteProveedor(proveedorId).subscribe(() =>
       {this.toastrService.error("El proveedor fue borrado satisfactoriamente", "Proveedor borrado")}) ;
        this.ngOnInit();
  }
}
