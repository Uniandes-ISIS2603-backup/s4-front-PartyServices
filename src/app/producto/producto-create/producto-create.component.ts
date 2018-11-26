import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../producto/producto';
import { ProductoService } from '../../producto/producto.service';
import { Servicio } from '../../servicio/servicio';
import { ServicioService } from '../../servicio/servicio.service';

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
   * Lista de servicios en los cuales se puede clasificar un producto
   */
  servicios: Servicio[] ;

  /**
   * Constructor del componente
   * @param dp 
   * @param productoService 
   * @param toastrService 
   */
  constructor(
    private dp: DatePipe,
    private productoService: ProductoService,
    private toastrService: ToastrService,
    private servicioService : ServicioService

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
    this.servicioService.getServicios().subscribe( (servicios) => {
      this.servicios = servicios ;     
    }) ;
    
   
  }

}
