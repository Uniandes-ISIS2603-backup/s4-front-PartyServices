import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {Valoracion} from '../../valoracion/valoracion' ;
import {ValoracionService} from '../../valoracion/valoracion.service' ;
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-valoracion-list',
  templateUrl: './valoracion-list.component.html',
  styleUrls: ['./valoracion-list.component.css']
})
export class ValoracionListComponent implements OnInit {


  @Input() valoracion : Valoracion;

  //idValoracion : number;
  public idProveedor : number;

 
   
  @Input() valoraciones: Valoracion[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(
  private valoracionService: ValoracionService,
  private route: ActivatedRoute,
  private router: Router
      ) { }
  
  



  getValoraciones(): void{
    this.valoracionService.getValoraciones(this.idProveedor)
    .subscribe(valoraciones =>{this.valoraciones = valoraciones}) ;
  }


  ngOnInit() {
    this.idProveedor = +this.route.snapshot.paramMap.get('id');
    //this.idProveedor = 4;
    console.log(this.idProveedor);
    this.getValoraciones() ;
  }

}
