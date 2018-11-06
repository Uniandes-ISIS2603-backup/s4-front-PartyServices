import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Proveedor} from './proveedor';

import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const proveedores = '/proveedor';

@Injectable()
export class ProveedorService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getProveedores() : Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL + proveedores);
    }
}
