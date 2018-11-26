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
     * The id of the author that the user wants to view
     */
     valoracion_id: number;

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
     * Shows or hides the detail of an author
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an author
    */
    showEdit: boolean;

    /**
     * the author that the user views.
     */
    selectedValoracion: Valoracion;
  
  
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
    * Shows the author
    */
    onSelected(valoracion_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.valoracion_id = valoracion_id;
        this.selectedValoracion = new Valoracion();
        this.getValoracion();
    }
  



    /**
     * Llama al servicio para actualizar la lista de valoraciones.
     */
    getValoraciones(): void{
    this.valoracionService.getValoraciones(this.idProveedor)
    .subscribe(valoraciones =>{this.valoraciones = valoraciones}) ;
    }
    
    getValoracion(): void {
        console.log(this.valoracion_id );
        this.valoracionService.getValoracion(this.idProveedor, this.valoracion_id )
            .subscribe(selectedValoracion => {
                this.selectedValoracion = selectedValoracion
            });
    }
    
    updateValoracion(): void{
        this.showEdit = false;
        this.showView = true;
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(valoracion_id: number): void {
        if (!this.showEdit || (this.showEdit && valoracion_id != this.selectedValoracion.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.valoracion_id = valoracion_id;
            this.selectedValoracion = new Valoracion();
            this.getValoracion();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }


    /**
     * This will initialize the component by retrieving the list of authors from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedValoracion = undefined;
        this.valoracion_id = undefined;
        
        this.idProveedor = +this.route.snapshot.paramMap.get('id');
        this.showCreate = false;
        this.getValoraciones() ;
    }
  
}
