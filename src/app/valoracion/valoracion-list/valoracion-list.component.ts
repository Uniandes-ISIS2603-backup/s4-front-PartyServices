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


    /**
     * Una valoracion
     */
     @Input() valoracion : Valoracion;

    /**
     * El identificador del proveedor de la valoracion
     */
     public idProveedor : number;

 
    /**
     * La lista de valoraciones de la aplicación
     */
    valoraciones: Valoracion[] ;


   /**
    * Shows or hides the valoracion-create-component
    */
    showCreate: boolean;
  
  
    /**
     * Constructor del componente
     * @param valoracionService, El proveedor del servicio de la valoracion.
     */
     constructor(
     private valoracionService: ValoracionService,
     private route: ActivatedRoute,
     private router: Router
      ) { }
  
  



    /**
     * Llama al servicio para actualizar la lista de valoraciones.
     */
    getValoraciones(): void{
    this.valoracionService.getValoraciones(this.idProveedor)
    .subscribe(valoraciones =>{this.valoraciones = valoraciones}) ;
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

     /**
     * Esto inicializará el componente recuperando la lista de valoraciones del servicio
     * Este método se llamará justo cuando el componente sea creado. 
     */
    ngOnInit() {
    this.idProveedor = +this.route.snapshot.paramMap.get('id');
    this.showCreate = false;

    this.getValoraciones() ;
    }

}
