import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  providers: [DatePipe]
})
export class ClienteEditComponent implements OnInit, OnChanges {

  /**
    * Constructor del componente
    * @param dp DatePipe para formatear la fecha de nacimiento del cliente
    * @param clienteService El proveedor de los servicios de cliente.
    * @param toastrService El servicio toastr para mostrar mensajes de error al usuario.
    */
    constructor(
        private dp: DatePipe,
        private clienteService: ClienteService,
        private toastrService: ToastrService,
    ) {}

    /**
    * El cliente recibido del componente padre.
    */
    @Input() cliente: Cliente;

    /**
    * El output para avisarle al componente padre 
    * que el usuario no quiere editar un cliente.
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output para avisarle al componente padre 
    * que el usuario editó el cliente.
    */
    @Output() update = new EventEmitter();

    /**
    * Edita la información del cliente.
    */
    editCliente(): void {
        let dateB: Date = new Date(this.cliente.fechaNacimiento.day, this.cliente.fechaNacimiento.month-1, this.cliente.fechaNacimiento.year);
        this.cliente.fechaNacimiento = this.dp.transform(dateB, 'dd/MM/yyyy');
        console.log(this.cliente)
        console.log(this.cliente.fechaNacimiento);
        this.clienteService.updateCliente(this.cliente)
            .subscribe(() => {
                this.toastrService.success("La información del cliente ha sido actualizada satisfactoriamente", "Editar Cliente");
            });
        this.update.emit();
        
    }

    
    /**
    * Emite la señal para avisarle al componente padre que
    * el usuario no quiere editar el cliente.
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * Esta funcion inicializa el componente.
    */
    ngOnInit() {
        /*if (this.cliente && this.cliente.fechaNacimiento) {
            this.cliente.fechaNacimiento = this.cliente.fechaNacimiento.substring(0, 10);
            var date = {
                day: + this.cliente.fechaNacimiento.split('/')[2],
                month: + this.cliente.fechaNacimiento.split('/')[1],
                year: + this.cliente.fechaNacimiento.split('/')[0]
            };
            this.cliente.fechaNacimiento = date;
        }*/
    }

    /**
    * Esta función será llamada cuando el usuario elige otro cliente para editar.
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
