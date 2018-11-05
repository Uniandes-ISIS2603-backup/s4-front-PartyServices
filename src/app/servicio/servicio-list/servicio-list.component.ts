import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Servicio} from '../../servicio/servicio' ;
import {ServicioService} from '../../servicio/servicio.service' ;
@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {


   /**
    * The list of servicios to display
    */
  servicios: Servicio[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private servicioService: ServicioService) { }

 // allservicios: string = 'no' ;


  getServicios(): void{
    this.servicioService.getServicios()
    .subscribe(servicios =>{this.servicios = servicios}) ;
  }


  ngOnInit() {
    this.getServicios() ;
  /*  this.route.queryParams
    .filter(params => params.allservicios)
    .subscribe(params => {
      console.log(params);
      this.allservicios = params.allservicios ;
    console.log(this.allservicios) ;
    }) ;

    if(this.allservicios == 'yes'){
      console.log('allservicios') ;
      this.getServicios ;
    }
*/
  }

}
