import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Tematica} from './tematica';

import {environment} from '../../environments/environment' ;
const API_URL = "../../assets/";
const tematicas = 'tematicas.json' ;

@Injectable()
export class TematicaService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getTematicas() : Observable<Tematica[]> {
        return this.http.get<Tematica[]>(API_URL + tematicas);
    }
}
