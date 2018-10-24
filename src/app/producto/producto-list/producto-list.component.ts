import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Producto} from '../../producto/producto' ;
import {ProductoService} from '../../producto/producto.service' ;
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


   /**
    * The list of books to display
    */
  productos: Producto[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private productoService: ProductoService) { }

 // allproductos: string = 'no' ;


  getProductos(): void{
    this.productoService.getProductos()
    .subscribe(productos =>{this.productos = productos}) ;
  }


  ngOnInit() {
    this.getProductos() ;
  /*  this.route.queryParams
    .filter(params => params.allproductos)
    .subscribe(params => {
      console.log(params);
      this.allproductos = params.allproductos ;
    console.log(this.allproductos) ;
    }) ;

    if(this.allproductos == 'yes'){
      console.log('allproductos') ;
      this.getProductos ;
    }
*/
  }

}
