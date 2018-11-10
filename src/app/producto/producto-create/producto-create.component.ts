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

  producto: Producto;


  constructor(
    private dp: DatePipe,
    private productoService: ProductoService,
    private toastrService: ToastrService

  ) { }


  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createProducto(): Producto {

    this.productoService.createProducto(this.producto)
      .subscribe((producto) => {
        this.producto = producto;
        this.create.emit();
        this.toastrService.success("El producto fue creado", "Creacion Producto")
      });


    return this.producto;


  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {

    this.producto = new Producto();
  }

}
