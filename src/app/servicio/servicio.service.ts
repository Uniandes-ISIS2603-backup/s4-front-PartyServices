import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';

import {Servicio} from './servicio';

import {environment} from '../../environments/environment' ;
import { Proveedor } from '../proveedor/proveedor';

const API_URL = environment.apiURL;
const servicios = '/servicio';

@Injectable()
export class ServicioService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }



    /**
     * Obtiene los servicios
     */
    getServicios() : Observable<Servicio[]> {
        return this.http.get<Servicio[]>(API_URL + servicios);
    }

    /**
     * Obtiene un servicio
     * @param id el servicio a buscar
     */
    getServicio(id:number):Observable<Servicio>{
        return this.http.get<Servicio>(API_URL + servicios+'/'+id);
    }

    /**
     * Crea un servicio
     * @param servicio servicio a crear
     */
    crateServicio(servicio:Servicio):Observable<Servicio>{
        return this.http.post<Servicio>(API_URL+servicios,servicio);
    }

    /**
     * Obtiene proveedores de un servicio
     * @param servicioId servicio a encontrar proveedores
     */
    getProveedores(servicioId:number):Observable<Proveedor[]>{
        return this.http.get<Proveedor[]>(API_URL+servicios+'/'+servicioId+'/'+'proveedores');
    }
    
    postProveedor(proveedorId:number, servicioId:number):Observable<Proveedor>{
        return this.http.post<Proveedor>(API_URL+servicios+'/'+servicioId+'/'+'proveedores'+'/'+proveedorId,null);
    }
}
