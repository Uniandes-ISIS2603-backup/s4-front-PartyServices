import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Producto} from './producto';

import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const productos = '/productos' ;




@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  getProductos() : Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + productos);
    }
}
