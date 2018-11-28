import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Producto } from './../producto';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css'],
  providers: [DatePipe]
})

export class ProductoEditComponent implements OnInit, OnChanges {

  constructor(
    private dp: DatePipe,
    private productoService: ProductoService,
    private toastrService: ToastrService,
    private route: ActivatedRoute

  ) { }

  /**
     * The producto's name as received from the parent component
     */
  @Input() producto: Producto;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an producto
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new producto
  */
  @Output() update = new EventEmitter();

  /**
   * Updates the information of the author
   */
  editProducto(): void {

    this.productoService.updateProducto(this.producto)
      .subscribe(() => {
        
        this.toastrService.success("The producto's information was updated", "producto edition");
      });
    this.update.emit();
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create an user
      */
  cancelEdition(): void {
    this.cancel.emit();
  }


  ngOnInit() {
  }


  /**
    * This function will be called when the user chooses another producto to edit
    */
  ngOnChanges() {
    this.ngOnInit();
  }

}
