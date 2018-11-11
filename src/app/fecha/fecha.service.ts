import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Fecha } from '../fecha/fecha';
import { Observable } from 'rxjs';
const API_URL = environment.apiURL;
const fecha = '/fecha';

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

  /**
   * Retorna el Observable con la fecha buscada por idAgenda, dia y jornada
   * @param idAgenda id de la agenda de la fecha
   * @param dia dia de la fecha
   * @param jornada jornada de la fecha
   * @returns la fecha buscada
   */
  findFecha(idAgenda : number, dia : string, jornada : string):Observable<Fecha>
  {
    return this.http.get<Fecha>(API_URL+fecha+'/'+idAgenda+'/'+dia+'/'+jornada);
  }

  /**
   * Busca una fecha
   * @param idFecha el id de la fecha a buscar
   */
  getFecha(idFecha : number) : Observable<Fecha>
  {
    return this.http.get<Fecha>(API_URL+fecha+'/'+idFecha);
  }

  /**
   * Busca los eventos de una fecha
   * @param idFecha el id de la fecha a buscar sus eventos
   */
  getEventosDeFecha(idFecha:number):Observable<any []>
  {
    return this.http.get<any>(API_URL+fecha+'/'+idFecha+'/'+'eventos');
  }

  /**
   * Crea una fecha
   * @param fechaO objeto tipo fecha
   * @param idAgenda agenda de la fecha
   */
  crearFecha(fechaO : Fecha, idAgenda: number):Observable<Fecha>{
    
    console.log(API_URL+fecha+'/'+idAgenda);
    console.log(idAgenda);
    return this.http.post<Fecha>(API_URL+fecha+'/'+idAgenda,fechaO);
  }

  /**
   * Busca una fecha por su agenda,id y jornada
   * @param agenda agenda de la consulta
   * @param dia dia de consulta
   * @param jornada jornada de consulta
   */
  getFechaByAgendaDiaJornada(agenda:number,dia:string,jornada:string):Observable<Fecha>{
    return this.http.get<Fecha>(API_URL+fecha+'/'+agenda+'/'+dia+'/'+jornada);
  }


}
