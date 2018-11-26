import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  /**
   * Constructor del componente 
   * @param eventoService 
   * @param route 
   */
  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService

  ) { }

  /**
   * Objeto que representa a un evento
   */
  evento: Evento;

  /**
     * Variable del nombre con el cual se va a buscar en la lista de eventos
     */
  evento_nombre: string;
   /**
  * Shows or hides the edition of an event
  */
 showEdit: boolean;

  /**
  * Llama al servicio para obtener el evento del cual se mostrará la información
  */
  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_nombre)
      .subscribe(evento => {
        this.evento = evento;
      });
  }
 /**
    * Shows or hides the edit component
    */
   showHideEdit(evento_nombre: String): void {
    if (!this.showEdit || (this.showEdit && evento_nombre != this.evento.nombre)) {
      this.showEdit = true;      
      
    }
    else {
      this.showEdit = false;
    }
  }

  
  /**
  * Esto inicializará el componente recuperando el detail del evento del servicio
  * Este método se llamará justo cuando el componente sea creado. 
  */
 ngOnInit() {
  this.showEdit = false;
  this.evento_nombre = this.route.snapshot.paramMap.get('nombre');
  this.evento = new Evento();
  this.getEventoDetail();
}



updateEvento(): void {
  this.showEdit=!this.showEdit;
}


cancelEdition():void {
  this.showEdit=!this.showEdit;
  this.evento=new Evento();
  this.getEventoDetail();
}
  /**
    * Elimina un evento
    */
  deleteEvento(evento_nombre): void {
    this.eventoService.deleteEvento(evento_nombre).subscribe(() => 
    {this.toastrService.error("El evento fue borrado satisfactoriamente", "Evento borrado")});
      this.ngOnInit();
  }


}
