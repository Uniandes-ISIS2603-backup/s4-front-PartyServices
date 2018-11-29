import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ProveedorService} from '../proveedor.service';
import {Proveedor} from '../proveedor'
type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css'],
  providers: [DatePipe]
})
export class ProveedorCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param ProveedorService The proveedor services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private proveedorService:ProveedorService,
        private toastrService: ToastrService
    ) {}
    
    /**
     * The new proveedor
     */
     proveedor: Proveedor;
     
     
    estaEnAgenda:boolean;

     /**
    * The output which tells the parent component
    * that the user no longer wants to create an proveedor
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new proveedor
    */
    @Output() create = new EventEmitter();
     
     
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an proveedor
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    /**
    * Cancels the creation of the new proveedor
    * Redirects to the proveedor list page
    */
    /*cancelCreation(): void {
        this.toastrService.warning('No se pudo registrar el proveedor', 'Registrar proveedor');
        this.router.navigate(['/proveedores/list']);
    }*/
    
    /**
    * Creates a new proveedor
    */
    createProveedor(): Proveedor {
        this.proveedorService.createProveedor(this.proveedor)
            .subscribe((proveedor) => {
                this.proveedor = proveedor;
                //this.create.emit();
                this.toastrService.success("El proveedor ha sido creado satisfactoriamente.", "Crear proveedor");
                
            });
            this.pasarAAgenda();
            return this.proveedor;
    }
    

  ngOnInit() {
      this.estaEnAgenda=false;
      this.proveedor = new Proveedor();
  }
  pasarAAgenda(){
      this.estaEnAgenda=true;
  }
  finalizacion(){
      this.create.emit();
  }

}
