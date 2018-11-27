import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente'

type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
  providers: [DatePipe]
})
export class ClienteCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param clienteService The cliente services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private clienteService:ClienteService,
        private toastrService: ToastrService
    ) {}
    
    /**
     * The new cliente
     */
     cliente: Cliente;
     
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    /**
    * Creates a new cliente
    */
    createCliente(): Cliente {
        console.log(this.cliente);
        let dateB: Date = new Date(this.cliente.fechaNacimiento.day, this.cliente.fechaNacimiento.month-1, this.cliente.fechaNacimiento.year);
        this.cliente.fechaNacimiento = this.dp.transform(dateB, 'dd/MM/yyyy');
        console.log(this.cliente)
        console.log(this.cliente.fechaNacimiento);
        this.clienteService.createCliente(this.cliente)
            .subscribe((cliente) => {
                this.cliente = cliente;
                this.create.emit();
                this.toastrService.success("El cliente ha sido creado satisfactoriamente.", "Crear cliente");
                
            });
            return this.cliente;
    }

  ngOnInit() {
      this.cliente = new Cliente();
  }

}
