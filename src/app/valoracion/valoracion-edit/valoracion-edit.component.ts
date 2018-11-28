import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ProveedorService } from '../../proveedor/proveedor.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../../cliente/cliente';
import { Proveedor } from '../../proveedor/proveedor';

import { ValoracionService } from '../valoracion.service';

import { Valoracion } from '../valoracion';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-valoracion-edit',
    templateUrl: './valoracion-edit.component.html',
    styleUrls: ['./valoracion-edit.component.css'],
})
export class ValoracionEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private valoracionService: ValoracionService,
        private clienteService : ClienteService,
        private proveedorService : ProveedorService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    /**
    * The author id as received from the parent component
    */
    @Input() valoracion: Valoracion;
    
    
    /**
    * La lista de todos los clientes.
    */
    clientes: Cliente[];
    
    /**
    * The author id as received from the parent component
    */
    idProveedor: number;
    
    /**
    * The author id as received from the parent component
    */
    idCliente: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the author
    */
    editValoracion(): void {
        this.valoracionService.updateValoracion(this.valoracion, this.idProveedor )
            .subscribe(() => {
                this.toastrService.success("La información de  la valoración ha sido actualizada", "Actualización valoración");
            });
        this.update.emit();
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if(this.valoracion && (this.valoracion.cliente != null) ){
        this.idProveedor =+ this.route.snapshot.paramMap.get('id');
        this.getClientes();
        }
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
