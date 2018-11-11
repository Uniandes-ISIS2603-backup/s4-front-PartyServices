import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Agenda } from '../agenda/agenda';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const agenda = '/agenda';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  /**
   * Constructor del servicio
   * @param http EL HttpClient. Es necesario para realizar las peticiones
   */
  constructor( private http : HttpClient) { }

  /**
   * Retorna el observable con la agenda 
   * @param idAgenda id de la agenda a buscar
   * @returns la agenda
   */
  getAgenda(idAgenda : number ) : Observable<Agenda>
  {
    return this.http.get<Agenda>(API_URL+agenda+'/'+idAgenda);
  }

  /**
   * Crear una agenda
   * @param idProveedor proveedor de la agenda
   * @param agendaC agenda a crear
   */
  createAgenda(idProveedor : number, agendaC: Agenda) : Observable<Agenda>
  {
    console.log(API_URL+agenda+'/'+idProveedor);
    console.log(agendaC);
    return this.http.post<Agenda>(API_URL+agenda+'/'+idProveedor, agendaC);
  }

}
