import { Component, OnInit, Input } from '@angular/core';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sugerencia-detail',
  templateUrl: './sugerencia-detail.component.html',
  styleUrls: ['./sugerencia-detail.component.css']
})
export class SugerenciaDetailComponent implements OnInit {

/**
 * Una sugerencia buscada
 */
  @Input() sugerencia : Sugerencia;

/**
 * Identificador de la tematica de la valoracion
 */
    public idTematica : number;

 /**
  * identificador de la sugerencia
  */
    public idSugerencia : number;
  
    /**
* Constructor for the component
* @param route The route which helps to retrieves the id of the sugerencia to be shown
* @param sugerenciaService The Sugerencia's services provider
* @param toastrService The toastr to show messages to the user
*/
  constructor(
    private sugerenciaService : SugerenciaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

 /**
    * The method which initializes the component.
    * We need to create the sugerencia so it is never considered as undefined
    */
  ngOnInit() {
        this.idSugerencia = +this.route.snapshot.paramMap.get('idSugerencia');
        this.idTematica = +this.route.snapshot.paramMap.get('id');
        
        this.getSugerencia();
  }

/**
    * The method which obtains the sugerencia whose details we want to show
    */
  getSugerencia(){
    this.sugerenciaService.getSugerencia(this.idTematica,this.idSugerencia)
    .subscribe( sugerencia =>{
        this.sugerencia=sugerencia;
      }
    );
  }

  

}
