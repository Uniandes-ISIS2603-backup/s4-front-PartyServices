import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SugerenciaService } from '../sugerencia.service';
import { Sugerencia } from '../sugerencia';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from '../../proveedor/proveedor.service';
import { ClienteService } from '../../cliente/cliente.service';

import { Tematica } from '../../tematica/tematica';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-sugerencia-create',
  templateUrl: './sugerencia-create.component.html',
  styleUrls: ['./sugerencia-create.component.css']
})
export class SugerenciaCreateComponent implements OnInit {

/**
 * sugerencia que se piensa crear
 */
  public sugerencia : Sugerencia;

    /**
    * La lista de todos los clientes.
    */
    clientes: Cliente[];
    
/**
 * Identificacion de la tematica al que le pertenece la sugerencia
 */
  public idTematica : number;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new cliente
   */
   @Output() create = new EventEmitter();
  
   /**
    * Constructor for the component
    * @param sugerenciaService The sugerencia services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
  constructor(
    private sugerenciaService : SugerenciaService,
    private clienteService : ClienteService,
    private proveedorService : ProveedorService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

/**
    * The method which initializes the component.
    * We need to create the sugerencia so it is never considered as undefined
    */
  ngOnInit() {
    this.idTematica = +this.route.snapshot.paramMap.get('id');
    this.sugerencia=new Sugerencia();
      this.sugerencia.cliente = new Cliente();
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
 * Este metodo crea una nueva sugerencia en la apliacion
 */
  createSugerencia():Sugerencia{
        console.log(this.sugerencia);
        
        
        this.sugerenciaService.createSugerencia(this.sugerencia,this.idTematica)
            .subscribe((sugerencia) => {
                this.sugerencia = sugerencia;
                this.create.emit();
                this.toastrService.success("La sugerencia ha sido creado satisfactoriamente.", "Crear proveedor");
                
            });
            return this.sugerencia;
    
    
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
   cancelCreation(): void {
    this.toastrService.warning('No se pudo registrar la sugerencia', 'Registrar sugerencia');
    this.cancel.emit("Cancelado");
  }

}
