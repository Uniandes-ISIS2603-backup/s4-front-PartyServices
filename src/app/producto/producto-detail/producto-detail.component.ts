import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductoService } from '../../producto/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../producto/producto';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
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
  * Shows or hides the edition of an product
  */
  showEdit: boolean;


  /**
    * Esto inicializará el componente recuperando el detail del producto del servicio
    * Este método se llamará justo cuando el componente sea creado. 
    */
  ngOnInit() {

    this.showEdit = false;
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
  /**
    * Shows or hides the edit component
    */
  showHideEdit(producto_nombre: String): void {
    if (!this.showEdit || (this.showEdit && producto_nombre != this.producto.nombre)) {

      this.showEdit = true;
      this.producto = new Producto();


    }
    else {
      this.showEdit = false;
    }
  }


  /**
    * Elimina un producto
    */
  deleteProducto(producto_nombre): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Borrar un producto',
      childComponent: SimpleModalComponent,
      data: { text: '¿Estás seguro de que quieres borrar este producto?' },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.productoService.deleteProducto(producto_nombre).subscribe(() => {
              this.toastrService.error("El producto fue borrado satisfactoriamente", "Producto borrado");
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, "Error");
            });
            return true;
          }
        },
        { text: 'No', onAction: () => true }
      ]
    });
  }



}
