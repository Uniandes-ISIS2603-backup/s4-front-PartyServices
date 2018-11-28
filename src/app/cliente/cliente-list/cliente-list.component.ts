
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
    //private clienteService: ClienteService;
  /**
     * Constructor del componente
     * @param clienteService El proveedor del servicio de cliente.
     */
    constructor(private clienteService: ClienteService,
                 private toastrService: ToastrService) { }
    
    
    /**
    * Muestra u oculta el cliente-create-component
    */
    showCreate: boolean;
    
    /**
     * Muestra u oculta el detalle de un cliente.
     */
    showView: boolean;
    
    /**
    * Shows or hides the edition of an author
    */
    showEdit: boolean;
    
    /**
     * El cliente que el usuario ve 
     */
    selectedCliente: Cliente;        
    
    /**
     * La lista de clientes de la aplicación
     */
    clientes: Cliente[];
    
    /**
    * El id del cliente que el usuario quiere ver.
    */
    cliente_id: number;
    
    /**
    * Muestra el cliente
    */
    onSelected(cliente_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.cliente_id = cliente_id;
        this.selectedCliente= new ClienteDetail();
        this.getClienteDetail();
    }
    
    /**
     * Llama al servicio para actualizar la lista de clientes.
     */
    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }
    
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(selectedCliente => {
                this.selectedCliente = selectedCliente
            });
    }
    
    updateCliente(): void {
        this.showEdit = false;
        this.showView = true;
    }
    
     /**
    * Muestra o oculta el el componente de crear
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    /**
    * Muestra u oculta el componente de crear
    */
    showHideEdit(cliente_id: number): void {
        if (!this.showEdit || (this.showEdit && cliente_id != this.selectedCliente.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.cliente_id = cliente_id;
            this.selectedCliente = new ClienteDetail();
            this.getClienteDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

  /**
     * Esto inicializará el componente recuperando la lista de clientes del servicio
     * Este método se llamará justo cuando el componente sea creado. 
     */
    ngOnInit() {
      this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedCliente = undefined;
        this.cliente_id = undefined;
        this.getClientes();
    }

}
