import { Injectable } from '@angular/core';
import {Observable}from 'rxjs' ;
import { HttpClient } from '@angular/common/http';


import {Sugerencia} from './sugerencia';
import {environment} from '../../environments/environment' ;
const API_URL = environment.apiURL;
const sugerencias = '/sugerencias';
const tematica = '/tematicas';



@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

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
    getSugerencias(idTematica: number) : Observable<Sugerencia[]> {
        return this.http.get<Sugerencia[]>(API_URL + tematica+'/'+idTematica + sugerencias);
    }
    
    getSugerencia(idTematica:number , idSugerencia: number) : Observable<Sugerencia>
     {
    return this.http.get<Sugerencia>(API_URL+ tematica+'/'+idTematica + sugerencias+'/'+idSugerencia);
     }
  
  
  createSugerencia(sugerencia : Sugerencia, idTematica: number):Observable<Sugerencia>{
    
    
    return this.http.post<Sugerencia>(API_URL + tematica+'/'+idTematica + sugerencias,sugerencia);
  }
}
