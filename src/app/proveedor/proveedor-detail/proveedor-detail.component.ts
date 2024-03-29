
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ProveedorService} from '../proveedor.service';
import {Proveedor} from '../proveedor';
import {ProveedorDetail} from '../proveedor-detail';
import { Producto } from '../../producto/producto';

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
    private proveedorService:ProveedorService,
    private toastrService: ToastrService
  ) { }
  
  /**
    * El proveedor
    */
    @Input() proveedorDetail: Proveedor;
      
   /**
    * El id del proveedor que viene en el path get .../proveedor/proveedor_id
    */
    proveedor_Id: number;
    
      showEdit : boolean;
      
      showCreate : boolean;
      
      otroAtributo:boolean;
      
      productos: Producto[];
      
    /**
    * The method which obtains the provider whose details we want to show
    */
    getProveedorDetail():void{
        this.proveedorService.getProveedorDetail(this.proveedor_Id)
            .subscribe(proveedorDetail => {
                this.proveedorDetail = proveedorDetail;
        });
    }
    
    /*validate():void{
        this.proveedorService.validate(this.nombre, this.contrasenia)
            .subscribe(proveedorDetail => {
                this.proveedorDetail = proveedorDetail;
        });
    }*/
    
    getProductos(): void {
    this.proveedorService.getProductos()
      .subscribe(productos => { this.productos = productos });
  }
    
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    
    compare(string1: string, string2:string): boolean{
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
      if(!this.proveedorDetail){
        this.proveedor_Id = +this.route.snapshot.paramMap.get('id');
        this.proveedorDetail = new ProveedorDetail();
        this.getProveedorDetail();
      }
      else{
          this.proveedor_Id = this.proveedorDetail.id;
      }
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
  }

  cancelarEdicion():void {
    this.proveedorDetail= new Proveedor();
    this.getProveedorDetail();
  }
  
  deleteProveedor(proveedorId: number): void {
      
      this.proveedorService.deleteProveedor(proveedorId).subscribe(() =>
       {this.toastrService.error("El proveedor fue eliminado satisfactoriamente", "Proveedor borrado")}) ;
        this.ngOnInit();
  }
}
