import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Fecha } from '../fecha/fecha';
import { Observable } from 'rxjs';
const API_URL = environment.apiURL;
const fecha = '/fecha'

/**
 * El servicio con todo lo relacionado a fecha
 */
@Injectable({
  providedIn: 'root'
})
export class FechaService {

  /**
   * Constructor del servicio
   * @param http EL HttpClient. Es necesario para realizar las peticiones
   */
  constructor( private http : HttpClient) { }

  /**
   * Retorna el Observable con la lista de fechas de una agenda
   * @param idAgenda el id de la agenda
   * @returns las fechas de una agenda
   */
  getFechas(idAgenda : number) : Observable<Fecha[]>
  {
    return this.http.get<Fecha[]>(API_URL+fecha+'/idAgenda'+'/'+idAgenda);
  }

  getFecha(idAgenda : number, dia : string, jornada : string):Observable<Fecha>
  {
    return this.http.get<Fecha>(API_URL+fecha+'/'+idAgenda+'/'+dia+'/'+jornada);
  }
}
