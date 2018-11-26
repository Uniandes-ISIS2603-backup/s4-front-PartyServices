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

  /**
   * Actualiza la agenda
   * @param agendaU la agenda a actualizar
   */
  updateAgenda(agendaU:Agenda) : Observable<Agenda>{
    return this.http.put<Agenda>(API_URL+agenda+'/',agendaU);
  }

  /**
   * Penitencia a un proveedor
   * @param agendaU asigna la fecha de penitencia a un mes despues de la fecha actul
   */
  penitenciarProveedor(agendaU:Agenda):Observable<Agenda>{
    var fechaPenitencia = new Date();
    var fechaPen=fechaPenitencia.getFullYear()+'-'+(fechaPenitencia.getMonth()+2)+'-'+fechaPenitencia.getDate()+'T00:00:00-00:00';
    agendaU.fechaPenitencia=fechaPen;
    return this.http.put<Agenda>(API_URL+agenda+'/',agendaU);
  }
}
