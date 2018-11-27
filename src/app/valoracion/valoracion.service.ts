import { Injectable } from '@angular/core';
import { Observable }from 'rxjs' ;
import { HttpClient } from '@angular/common/http';


import { Valoracion } from './valoracion';
import { environment } from '../../environments/environment';

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
    getValoraciones(idProveedor: number) : Observable<Valoracion[]>
    {
      return this.http.get<Valoracion[]>(API_URL + proveedor+'/'+idProveedor + valoraciones);
    }
    
    
   /**
    * Retorna un objeto observable que contiene una valoracion de un proveedor
    * @param idProveedor id del proveedor a buscar
    * @param idValoracion id de la valoracion a buscar
    * @return  valoracion
    */
    getValoracion(idProveedor:number , idValoracion : number) : Observable<Valoracion>
    {
      return this.http.get<Valoracion>(API_URL+ proveedor+'/'+idProveedor + valoraciones+'/'+idValoracion);
    }
  
   /**
    * Crea una nueva valoracion
    * @param valoracionO. La nueva valoracion a crear en la base de datos.
    * @returns The valoracion with its new id if it was created, false if it wasn't
    */
    createValoracion(valoracion : Valoracion, idProveedor: number):Observable<Valoracion>
    {
      return this.http.post<Valoracion>(API_URL + proveedor+'/'+idProveedor + valoraciones,valoracion);
    }
    
    /**
    * Updates a valoracion
    * @param author The author's information updated
    * @returns The confirmation that the author was updated
    */
    updateValoracion(valoracion : Valoracion, idProveedor: number): Observable<Valoracion> {
      return this.http.put<Valoracion>(API_URL + proveedor+'/'+idProveedor + valoraciones+ '/'+ valoracion.id,valoracion);
    }
    
    /**
    * Deletes a valoracion from the BookStore
    * @param authorId The id of the author
    * @returns The confirmation that the author was deleted
    */
    deleteValoracion(idProveedor : number, valoracionid : number): Observable<boolean> {
        return this.http.delete<boolean>API_URL + proveedor+'/'+idProveedor + valoraciones+ '/'+ valoracion.id);
    }
    
  
}
