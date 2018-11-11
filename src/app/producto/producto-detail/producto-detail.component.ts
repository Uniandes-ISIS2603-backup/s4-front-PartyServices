import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../producto/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../producto/producto';
@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

/**
 * Constructor del componente
 * @param productoService
 * @param route 
 */
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute

  ) { }

  /**
   * Objeto que representa a un producto
   */
  producto: Producto;

  /**
   * Variable del nombre con el cual se va a buscar en la lista de productos
   */
  producto_nombre: string;

  /**
    * Esto inicializará el componente recuperando el detail del producto del servicio
    * Este método se llamará justo cuando el componente sea creado. 
    */
  ngOnInit() {

    this.producto_nombre = this.route.snapshot.paramMap.get('nombre');
    this.producto = new Producto();
    this.getProductoDetail();
  }

  /**
   * Llama al servicio para obtener el producto del cual se mostrará la información
   */
  getProductoDetail(): void {
    this.productoService.getProductoDetail(this.producto_nombre)
      .subscribe(producto => {
        this.producto = producto;
      });
  }



}
