import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Valoracion} from './valoracion';

import {environment} from '../../environments/environment' ;
const API_URL = "../../assets/";
const valoraciones = 'valoraciones.json' ;

@Injectable()
export class ValoracionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getValoraciones() : Observable<Valoracion[]> {
        return this.http.get<Valoracion[]>(API_URL + valoraciones);
    }
}
