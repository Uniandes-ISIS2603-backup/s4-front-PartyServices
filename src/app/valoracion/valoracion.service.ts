import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';


import {Valoracion} from './valoracion';
import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const valoraciones = '/valoraciones';
const proveedor = '/proveedor';



@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }




/**
   * Retorna el observable con la las valoraciones 
   * @param idProveedor id del proveedor a buscar
   * @returns las valoraciones
   */
   //http://{{ip}}:{{puerto}}/s4_PartyServices-api/api/proveedor/{{new_id_proveedorValoracion}}/valoraciones
    getValoraciones(idProveedor: number) : Observable<Valoracion[]> {
        return this.http.get<Valoracion[]>(API_URL + proveedor+'/'+idProveedor + valoraciones);
    }
    
    getValoracion(idProveedor:number , idValoracion : number) : Observable<Valoracion>
  {
    return this.http.get<Valoracion>(API_URL+ proveedor+'/'+idProveedor + valoraciones+'/'+idValoracion);
  }
  
  
  createValoracion(valoracionO : Valoracion, idProveedor: number):Observable<Valoracion>{
    
    
    return this.http.post<Valoracion>(API_URL + proveedor+'/'+idProveedor + valoraciones,valoracionO);
  }
  
  
}
