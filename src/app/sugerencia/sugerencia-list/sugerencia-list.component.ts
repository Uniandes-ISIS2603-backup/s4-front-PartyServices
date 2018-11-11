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


  @Input() sugerencia : Sugerencia;

  public idTematica : number;

 
   
  @Input() sugerencias: Sugerencia[] ;
  
  
  /**
    * Shows or hides the cliente-create-component
    */
    showCreate: boolean;


  
  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
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

    getSugerencias(): void{
    this.sugerenciaService.getSugerencias(this.idTematica)
    .subscribe(sugerencias =>{this.sugerencias = sugerencias}) ;
    }


  ngOnInit() {
    this.idTematica= +this.route.snapshot.paramMap.get('id');
    this.showCreate = false;

    this.getSugerencias() ;
  }

}
