import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Producto } from './producto';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const productos = '/producto';

@Injectable()
export class ProductoService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) { }


    /**
     * Metodo que obtiene todos los eventos del back, en la base de datos
     * @returns Una lista de productos 
     */
    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + productos);
    }

    /**
     * Metodo que obtiene toda la información de un producto por su nombre
     * @returns EL producto encontrado
     */
    getProductoDetail(nombre): Observable<Producto> {
        return this.http.get<Producto>(API_URL + productos + '/' + nombre);
    }

    /**
     * Metodo que crea un nuevo producto en la base de datos.
     * @param producto 
     */
    createProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(API_URL + productos, producto);
    }
}
