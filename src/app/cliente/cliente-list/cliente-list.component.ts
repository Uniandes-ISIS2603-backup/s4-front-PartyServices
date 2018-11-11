
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

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
    constructor(private clienteService: ClienteService) { }
    
    
    /**
    * Shows or hides the cliente-create-component
    */
    showCreate: boolean;
    /**
     * La lista de clientes de la aplicación
     */
    clientes: Cliente[];
    
    /**
     * Llama al servicio para actualizar la lista de clientes.
     */
    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }
    
    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    

  /**
     * Esto inicializará el componente recuperando la lista de clientes del servicio
     * Este método se llamará justo cuando el componente sea creado. 
     */
    ngOnInit() {
      this.showCreate = false;
      this.getClientes();
    }

}
