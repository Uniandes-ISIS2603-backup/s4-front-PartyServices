import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Agenda } from '../agenda/agenda';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const fecha = '/agenda';
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
  getAgenda(idAgenda : number ) : Observable<Agenda>{
    return this.http.get<Agenda>(API_URL+Agenda+'/'+idAgenda);
  }
}
