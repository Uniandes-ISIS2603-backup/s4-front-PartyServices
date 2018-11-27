
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Cliente } from './cliente';
import {ClienteDetail} from './cliente-detail'

/**
* El servicio para proveer todo lo relacionado con cliente.
*/
const API_URL = environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClienteService {

  /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
     * Retorna un objeto observable que contiene la lista de clientes del API
     * @return La lista de clientes en "tiempo real".
     */
    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }
    
    /**
     * Retorna un objeto observable con el detalle de un cliente específico del API
     * @return El detalle del cliente.
     */
     getClienteDetail(clienteId) : Observable<ClienteDetail> {
         return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
     }
     
     /**
    * Crea un nuevo cliente
    * @param cliente. El nuevo cliente a crear en la base de datos.
    * @returns The cliente with its new id if it was created, false if it wasn't
    */
    createCliente(cliente): Observable<ClienteDetail>{
        return this.http.post<ClienteDetail>(API_URL + clientes,cliente)
    }
    
    /**
    * Actuliza el cliente
    * @param cliente El cliente con la información actualizada.
    * @returns La confirmación de que el cliente fue actualizado.
    */
    updateCliente(cliente): Observable<ClienteDetail> {
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }
}
