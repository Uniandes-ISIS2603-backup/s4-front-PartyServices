
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

/**
* El servicio para proveer todo lo relacionado con cliente.
*/
const API_URL = "../../assets/";
const clientes = 'clientes.json';

@Injectable()
export class ClienteService {

  /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }
}
