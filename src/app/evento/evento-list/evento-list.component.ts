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



  constructor(private eventoService: EventoService) { }

  getEventos(): void {
    this.eventoService.getEventos()
      .subscribe(eventos => { this.eventos = eventos });
  }


  ngOnInit() {
    this.getEventos();
  }

}
