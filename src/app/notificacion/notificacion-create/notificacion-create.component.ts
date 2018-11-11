import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {NotificacionService} from '../notificacion.service';
import {Notificacion} from '../notificacion'

type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-notificacion-create',
  templateUrl: './notificacion-create.component.html',
  styleUrls: ['./notificacion-create.component.css'],
  providers: [DatePipe]
})
export class NotificacionCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param ProveedorService The proveedor services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private notificacionService:NotificacionService,
        private toastrService: ToastrService
    ) {}
    
    /**
     * The new proveedor
     */
     notificacion: Notificacion;
     
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
    createNotificacion(): Notificacion {
        console.log(this.notificacion);
        this.notificacionService.createNotificacion(this.notificacion)
            .subscribe((notificacion) => {
                this.notificacion = notificacion;
                this.create.emit();
                this.toastrService.success("El notificacion ha sido creado satisfactoriamente.", "Crear notificacion");
                
            });
            return this.notificacion;
    }

  ngOnInit() {
      this.notificacion = new Notificacion();
  }

}
