import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  /**
     * The list of events to display
     */
  eventos: Evento[]
  /**
      * Shows or hides the evento-create-component
      */
  showCreate: boolean;

  /**
      * The component's constructor
     */
  constructor(private eventoService: EventoService) { }

  /**
   * Llama al servicio para actualizar la lista de eventos  
   */
  getEventos(): void {
    this.eventoService.getEventos()
      .subscribe(eventos => { this.eventos = eventos });
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  /**
    * Esto inicializará el componente recuperando la lista de eventos del servicio
    * Este método se llamará justo cuando el componente sea creado. 
    */

  ngOnInit() {
    this.showCreate = false;
    this.getEventos();
  }

}
