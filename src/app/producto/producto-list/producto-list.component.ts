import { Component, OnInit } from '@angular/core';
import {Producto} from '../../producto/producto' ;
import {ProductoService} from '../../producto/producto.service' ;
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


   /**
    * The list of products to display
    */
  productos: Producto[] ;
/**
    * Shows or hides the producto-create-component
    */
   showCreate: boolean;
  /**
    * The component's constructor
   */
  constructor(private productoService: ProductoService) { }

  getProductos(): void{
    this.productoService.getProductos()
    .subscribe(productos =>{this.productos = productos}) ;
  }

    /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate;
}
/**
     * Esto inicializará el componente recuperando la lista de productos del servicio
     * Este método se llamará justo cuando el componente sea creado. 
     */
  ngOnInit() {
    this.showCreate = false;
    this.getProductos() ;
 
  }

}
