import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Sugerencia} from '../../sugerencia/sugerencia' ;
import {SugerenciaService} from '../../sugerencia/sugerencia.service' ;
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sugerencia-list',
  templateUrl: './sugerencia-list.component.html',
  styleUrls: ['./sugerencia-list.component.css']
})
export class SugerenciaListComponent implements OnInit {

/**
 * Una sugerencia
 */
  @Input() sugerencia : Sugerencia;

/**
   * El identificador de la tematica de la sugerencia
   */
  public idTematica : number;

 
   /**
     * La lista de sugerencias de la aplicación
     */
  @Input() sugerencias: Sugerencia[] ;
  
  
  /**
    * Shows or hides the sugerencia-create-component
    */
    showCreate: boolean;


  
 
  /**
     * Constructor del componente
     * @param sugerenciaService, El proveedor del servicio de la sugerencia.
     */
  constructor(
  private sugerenciaService: SugerenciaService,
  private route: ActivatedRoute,
  private router: Router
      ) { }
  
  

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    /**
     * Llama al servicio para actualizar la lista de sugerencias.
     */
    getSugerencias(): void{
    this.sugerenciaService.getSugerencias(this.idTematica)
    .subscribe(sugerencias =>{this.sugerencias = sugerencias}) ;
    }

   /**
     * Esto inicializará el componente recuperando la lista de sugerencias del servicio
     * Este método se llamará justo cuando el componente sea creado. 
     */
  ngOnInit() {
    this.idTematica= +this.route.snapshot.paramMap.get('id');
    this.showCreate = false;

    this.getSugerencias() ;
  }

}
