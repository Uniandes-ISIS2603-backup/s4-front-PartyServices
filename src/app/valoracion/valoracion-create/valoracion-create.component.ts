import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValoracionService } from '../valoracion.service';
import { Valoracion } from '../valoracion';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from '../../proveedor/proveedor.service';
import { ClienteService } from '../../cliente/cliente.service';

import { Cliente } from '../../cliente/cliente';
import { Proveedor } from '../../proveedor/proveedor';

@Component({
  selector: 'app-valoracion-create',
  templateUrl: './valoracion-create.component.html',
  styleUrls: ['./valoracion-create.component.css']
})
export class ValoracionCreateComponent implements OnInit {


    /**
     * valoracion que se piensa crear
     */
      public valoracion : Valoracion;

    /**
     * Identificacion del proveedor al que le pertenece la valoracion
     */
     public idProveedor : number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
   @Output() cancel = new EventEmitter();
   
   /**
    * La lista de todos los clientes.
    */
    clientes: Cliente[];

   
   /**
   * The output which tells the parent component
   * that the user created a new cliente
   */
   @Output() create = new EventEmitter();
  
   /**
    * Constructor for the component
    * @param valoracionService The valoracion services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
  constructor(
    private valoracionService : ValoracionService,
    private clienteService : ClienteService,
    private proveedorService : ProveedorService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }


  
   /**
    * The method which initializes the component.
    * We need to create the valoracion so it is never considered as undefined
    */
    ngOnInit() {
      this.idProveedor =+ this.route.snapshot.paramMap.get('id');
      this.valoracion=new Valoracion();
      this.valoracion.cliente = new Cliente();
      this.getClientes();
    }

    getClientes(): void {
          this.clienteService.getClientes()
              .subscribe(clientes => {
                  this.clientes = clientes;
              }, err => {
                  this.toastrService.error(err, 'Error');
              });
      }


/**
 * Este metodo crea una nueva valoracion en la apliacion
 */
  createValoracion():Valoracion{
        console.log(this.valoracion);
        this.valoracionService.createValoracion(this.valoracion,this.idProveedor)
            .subscribe((valoracion) => {
                this.valoracion = valoracion;
                this.create.emit();
                this.toastrService.success("La valoracion ha sido creado satisfactoriamente.", "Crear proveedor");
                
            });
            return this.valoracion;
  }
   
       
           

   /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
   cancelCreation(): void {
    this.toastrService.warning('No se pudo registrar la valoracion', 'Registrar valoracion');
    this.cancel.emit("Cancelado");
  }

}
