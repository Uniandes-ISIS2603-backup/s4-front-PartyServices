import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { TematicaService } from '../../tematica/tematica.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../../cliente/cliente';
import { Proveedor } from '../../proveedor/proveedor';

import { SugerenciaService } from '../sugerencia.service';

import { Sugerencia } from '../sugerencia';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sugerencia-edit',
    templateUrl: './sugerencia-edit.component.html',
    styleUrls: ['./sugerencia-edit.component.css'],
})
export class SugerenciaEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private sugerenciaService: SugerenciaService,
        private clienteService : ClienteService,
        private tematicaService : TematicaService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    /**
    * The author id as received from the parent component
    */
    @Input() sugerencia: Sugerencia;
    
    
    /**
    * La lista de todos los clientes.
    */
    clientes: Cliente[];
    
    /**
    * The author id as received from the parent component
    */
    idTematica: number;
    
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
    editSugerencia(): void {
        this.sugerenciaService.updateSugerencia(this.sugerencia, this.idTematica )
            .subscribe(() => {
                this.toastrService.success("La información de  la sugerencia ha sido actualizada", "Actualización sugerencia");
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
        if(this.sugerencia && (this.sugerencia.cliente != null) ){
        this.idTematica =+ this.route.snapshot.paramMap.get('id');
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
