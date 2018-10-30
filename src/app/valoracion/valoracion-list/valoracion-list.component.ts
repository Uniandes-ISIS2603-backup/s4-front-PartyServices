import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Valoracion} from '../../valoracion/valoracion' ;
import {ValoracionService} from '../../valoracion/valoracion.service' ;
@Component({
  selector: 'app-valoracion-list',
  templateUrl: './valoracion-list.component.html',
  styleUrls: ['./valoracion-list.component.css']
})
export class ValoracionListComponent implements OnInit {


   
  valoraciones: Valoracion[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private valoracionService: ValoracionService) { }



  getValoraciones(): void{
    this.valoracionService.getValoraciones()
    .subscribe(valoraciones =>{this.valoraciones = valoraciones}) ;
  }


  ngOnInit() {
    this.getValoraciones() ;
  
  }

}
