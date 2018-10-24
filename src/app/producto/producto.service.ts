import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Producto} from './producto';

import {environment} from '../../environments/environment' ;
const API_URL = "../../assets/";
const productos = 'productos.json' ;

@Injectable()
export class ProductoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




  getProductos() : Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + productos);
    }
}
