import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Servicio} from './servicio';

import {environment} from '../../environments/environment' ;
const API_URL = "../../assets/";
const servicios = 'servicios.json' ;

@Injectable()
export class ServicioService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getServicios() : Observable<Servicio[]> {
        return this.http.get<Servicio[]>(API_URL + servicios);
    }
}