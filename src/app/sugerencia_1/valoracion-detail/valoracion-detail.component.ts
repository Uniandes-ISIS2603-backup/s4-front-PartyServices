import { Component, OnInit, Input } from '@angular/core';
import { Valoracion } from '../valoracion';
import { ValoracionService } from '../valoracion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-valoracion-detail',
  templateUrl: './valoracion-detail.component.html',
  styleUrls: ['./valoracion-detail.component.css']
})
export class ValoracionDetailComponent implements OnInit {

/**
 * Una valoracion buscada
 */
 @Input() valoracion : Valoracion;

/**
 * Identificador del proveedor de la valoracion
 */
 public idProveedor : number;
 
 
/**
 * El id de la valoracion que viene en el path get .../valoraciones/valoracion_id
 */
 public valoracion_id: number;
 
/**
* Constructor for the component
* @param route The route which helps to retrieves the id of the valoracion to be shown
* @param valoracionService The Valoracion's services provider
* @param toastrService The toastr to show messages to the user
*/
  constructor(
    private valoracionService : ValoracionService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

/**
 * The method which initializes the component.
 * We need to create the valoracion so it is never considered as undefined
 */
  ngOnInit() {
    this.valoracion_id = +this.route.snapshot.paramMap.get('idValoracion');
    this.idProveedor = +this.route.snapshot.paramMap.get('id');
    if (this.valoracion_id){
        this.valoracion = new Valoracion();
        this.getValoracion();
        }   
    }

/**
 * The method which obtains the valoracion whose details we want to show
 */
  getValoracion(){
    this.valoracionService.getValoracion(this.idProveedor,this.valoracion_id)
    .subscribe( valoracion =>{
    this.valoracion=valoracion;
      }
    );
  }

  

}
