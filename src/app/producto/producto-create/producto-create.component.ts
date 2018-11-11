import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../producto/producto';
import { ProductoService } from '../../producto/producto.service';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css'],
  providers: [DatePipe]
})
export class ProductoCreateComponent implements OnInit {

  /**
   * Objeto que representa un producto
   */
  producto: Producto;

  /**
   * Constructor del componente
   * @param dp 
   * @param productoService 
   * @param toastrService 
   */
  constructor(
    private dp: DatePipe,
    private productoService: ProductoService,
    private toastrService: ToastrService

  ) { }


  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  /**
   * Llama al servicio para crear el producto solicitado
   */
  createProducto(): Producto {

    this.productoService.createProducto(this.producto)
      .subscribe((producto) => {
        this.producto = producto;
        this.create.emit();
        this.toastrService.success("El producto fue creado", "Creacion Producto")
      });
    return this.producto;

  }

  /**
   * Cancela la creación del producto
   */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
      * Esto inicializará el componente creando un producto vacio
      * Este método se llamará justo cuando el componente sea creado. 
      */
  ngOnInit() {

    this.producto = new Producto();
  }

}
