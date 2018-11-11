import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Notificacion} from './notificacion';


import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const notificaciones = '/notificacion';

@Injectable()
export class NotificacionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getProveedores() : Observable<Notificacion[]> {
        return this.http.get<Notificacion[]>(API_URL + notificaciones);
    }
    
    
    /**
     * Retorna un objeto observable con el detalle de un cliente específico del API
     * @return El detalle del cliente.
     */
     getNotificaciones() : Observable<Notificacion[]> {
         return this.http.get<Notificacion[]>(API_URL + notificaciones);
     }
     
     /**
    * Crea un nuevo cliente
    * @param cliente. El nuevo cliente a crear en la base de datos.
    * @returns The cliente with its new id if it was created, false if it wasn't
    */
    createNotificacion(notificacion): Observable<Notificacion>{
        return this.http.post<Notificacion>(API_URL + notificaciones,notificacion)
    }
    getNotificacionDetail(num):Observable<Notificacion>{
        return null;
    }
}


