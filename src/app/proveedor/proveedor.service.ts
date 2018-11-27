import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Proveedor} from './proveedor';

import {ProveedorDetail} from './proveedor-detail'

import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const proveedores = '/proveedor';
const productos = '/producto';

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
    
  getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + productos);
        
        
    }
    /**
     * Retorna un objeto observable con el detalle de un cliente específico del API
     * @return El detalle del cliente.
     */
    getProveedorDetail(proveedorId) : Observable<ProveedorDetail> {
         return this.http.get<ProveedorDetail>(API_URL + proveedores + '/' + proveedorId);
     }
     
     /**
    * Crea un nuevo cliente
    * @param cliente. El nuevo cliente a crear en la base de datos.
    * @returns The cliente with its new id if it was created, false if it wasn't
    */
    createProveedor(proveedor): Observable<ProveedorDetail>{
        return this.http.post<ProveedorDetail>(API_URL + proveedores,proveedor)
    }
    
    updateProveedor(proveedorU:Proveedor) : Observable<Proveedor>{
    return this.http.put<Proveedor>(API_URL+proveedores+'/'+proveedorU.id,proveedorU);
  }
  
    deleteProveedor(proveedorId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL+proveedores+'/'+ proveedorId);
    }
}


