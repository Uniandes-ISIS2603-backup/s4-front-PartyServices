
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
    * Creates a new book
    * @param cliente The new cliente
    * @returns The cliente with its new id if it was created, false if it wasn't
    */
    createCliente(cliente): Observable<ClienteDetail>{
        return this.http.post<ClienteDestail>(API_URL + clientes,cliente)
    }
}
