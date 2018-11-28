import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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
     * El id de la sugerencia que el cliente quiere ver
     */
    sugerencia_id: number;

    /**
     * El identificador de la tematica de la sugerencia
     */
     public idTematica : number;

 
    /**
     * La lista de sugerencia de la aplicación
     */
    sugerencias: Sugerencia[] ;


    /**
     * Muestra el componente valoracion-create-component
     */
     showCreate: boolean;
     

    /**
     * Muestra el detail de esta sugerencia.
     */
    showView: boolean;

    /**
    * Muestra la edición de una sugerencia
    */
    showEdit: boolean;

    /**
     * La sugerencia seleccionada.
     */
    selectedSugerencia: Sugerencia;
  
  
    /**
     * Constructor del componente
     * @param sugerenciaService, El proveedor del servicio de la sugerencia.
     * @param route, El la ruta del componente.
     * @param router, El enrutador de la sugerencia.
     * @param modalDialogService, El componente que pregunta una decision.
     * @param viewRief, El componente que muestra una pregunta.
     * @param toastrService, El anunciador de una decision
     */
     constructor(
     private sugerenciaService: SugerenciaService,
     private route: ActivatedRoute,
     private router: Router,
     private modalDialogService: ModalDialogService,
     private viewRef: ViewContainerRef,
     private toastrService: ToastrService
      ) { }
  
   /**
    * Shows the author
    */
    onSelected(sugerencia_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.sugerencia_id = sugerencia_id;
        this.selectedSugerencia = new Sugerencia();
        this.getSugerencia();
    }
  



    /**
     * Llama al servicio para actualizar la lista de sugerencias.
     */
    getSugerencias(): void{
    this.sugerenciaService.getSugerencias(this.idTematica)
    .subscribe(sugerencias =>{this.sugerencias = sugerencias; console.log(sugerencias)}) ;
    }
    
    /**
     *LLama una sola sugerencia buscada
     */
    getSugerencia(): void {
        console.log(this.sugerencia_id );
        this.sugerenciaService.getSugerencia(this.idTematica, this.sugerencia_id )
            .subscribe(selectedSugerencia => {
                this.selectedSugerencia = selectedSugerencia
            });
            
    }
    
    updateSugerencia(): void{
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
    showHideEdit(sugerencia_id: number): void {
        if (!this.showEdit || (this.showEdit && sugerencia_id != this.selectedSugerencia.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.sugerencia_id = sugerencia_id;
            this.selectedSugerencia = new Sugerencia();
            this.getSugerencia();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
    
    /**
    * Borra una valoración
    */
    deleteSugerencia(sugerenciaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una sugerencia',
            childComponent: SimpleModalComponent,
            data: {text: 'Quiere borrar esta sugerencia de esta tematica?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.sugerenciaService.deleteSugerencia(this.idTematica,sugerenciaId).subscribe(() => {
                            this.toastrService.error("La sugerencia fue correctamente borrada", "Sugerencia Borrada");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }



    /**
     * This will initialize the component by retrieving the list of authors from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedSugerencia = undefined;
        this.sugerencia_id = undefined;
        this.idTematica = +this.route.snapshot.paramMap.get('id');
        this.showCreate = false;
        this.getSugerencias() ;
    }

}
