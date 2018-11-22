import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  @Input() proveedor : Proveedor

  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();


  constructor(
    private proveedorService : ProveedorService,
    private toastrService : ToastrService
  ) { }

  ngOnInit() {
  }

  editarProveedor() : void {
    this.proveedorService.updateProveedor(this.proveedor)
      .subscribe(
        ()=>{
          this.toastrService.success("El proveedor se ha actualizado","Actualizacion de la proveedor")
        }
      )
    this.update.emit();
  }


  cancelarEdicion() : void {
    this.proveedor=new Proveedor();
    this.cancel.emit()
  }
}
