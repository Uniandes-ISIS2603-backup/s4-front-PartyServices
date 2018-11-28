import { Injectable } from '@angular/core';
import { Observable }from 'rxjs' ;
import { HttpClient } from '@angular/common/http';


import { Sugerencia } from './sugerencia';
import { environment } from '../../environments/environment';

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
    * Retorna el observable con la las sugerencias 
    * @param idTematica id del proveedor a buscar
    * @returns las sugerencias
    */
    getSugerencias(idTematica: number) : Observable<Sugerencia[]> 
    {
     return this.http.get<Sugerencia[]>(API_URL + tematica+'/'+idTematica + sugerencias);
    }
    
     /**
     * Retorna un objeto observable que contiene una sugerencia de una tematica
     * @return  valoracion
     */
    getSugerencia(idTematica:number , idSugerencia: number) : Observable<Sugerencia>
     {
      return this.http.get<Sugerencia>(API_URL+ tematica+'/'+idTematica + sugerencias+'/'+idSugerencia);
     }
  
    /**
    * Crea una nueva sugerencia
    * @param sugerencia. La nueva sugerencia a crear en la base de datos.
    * @returns The sugerencia with its new id if it was created, false if it wasn't
    */
    createSugerencia(sugerencia : Sugerencia, idTematica: number):Observable<Sugerencia>
    {
      return this.http.post<Sugerencia>(API_URL + tematica+'/'+idTematica + sugerencias,sugerencia);
    }
    
    /**
    * Actualiza una sugerencia
    * @param sugerencia The sugerencia's information updated
    * @returns The confirmation that the sugerencia was updated
    */
    updateSugerencia(sugerencia : Sugerencia, idTematica: number): Observable<Sugerencia> {
      return this.http.put<Sugerencia>(API_URL + tematica+'/'+idTematica + sugerencias+'/' +sugerencia.id,sugerencia);
    }
    
    /**
    * Deletes a sugerencai
    * @param idSugerencia The id of the author
    * @param idProveedor The id of the proveedor

    * @returns The confirmation that the author was deleted
    */
    deleteSugerencia( idTematica: number, idSugerencia: number,): Observable<boolean> {
      return this.http.delete<boolean>(API_URL + tematica+'/'+idTematica + sugerencias+ '/'+ idSugerencia);
    }
}
