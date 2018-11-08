import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Tematica } from './tematica';
import { TematicaDetail } from './tematica-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const NOAPI_URL = "../../assets/";
const tematicas = 'tematicas.json';


/**
* The service provider for everything related to tematicas
*/
@Injectable()
export class TematicaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of tematicas retrieved from the API
    * @returns The list of servicios in real time
    */
    getTematicas(): Observable<Tematica[]> {
        return this.http.get<Tematica[]>(NOAPI_URL + tematicas);
    }

    /**
    * Returns the Observable object containing the tematica retrieved from the API
    * @returns The tematica
    */
    getTematicaDetail(tematicaId): Observable<TematicaDetail> {
        return this.http.get<TematicaDetail>(API_URL + tematicas + '/' + tematicaId);
    }
    
    /**
    * Creates an tematica
    * @param tematica The tematica which will be created
    * @returns The confirmation of the tematica's creation
    */
    createTematica(tematica): Observable<Tematica> {
        return this.http.post<Tematica>(API_URL + tematicas, tematica);
    }
    
    /**
    * Updates an tematica
    * @param tematica The tematica which will be update
    * @returns The confirmation of the tematica's update
    */
    updateTematica(tematica): Observable<TematicaDetail> {
        return this.http.put<TematicaDetail>(API_URL + tematicas + '/' + tematica.id, tematica);
    }
}
