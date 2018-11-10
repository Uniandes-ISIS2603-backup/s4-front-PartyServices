import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';
import {Evento} from './evento';
import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const eventos = '/evento' ;

@Injectable()
export class EventoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getEventos() : Observable<Evento[]> {
        return this.http.get<Evento[]>(API_URL + eventos);
    }


    getEventoDetail(nombre) :Observable<Evento>{
        return this.http.get<Evento>(API_URL + eventos + '/' + nombre);
    }

    createEvento(evento: Evento):Observable<Evento>
    {
        return this.http.post<Evento>(API_URL + eventos, evento) ;
    }
}
