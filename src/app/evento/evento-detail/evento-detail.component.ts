import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';

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
    private route: ActivatedRoute

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
  * Llama al servicio para obtener el evento del cual se mostrará la información
  */
  getEventoDetail(): void {
    this.eventoService.getEventoDetail(this.evento_nombre)
      .subscribe(evento => {
        this.evento = evento;
      });
  }

  /**
  * Esto inicializará el componente recuperando el detail del evento del servicio
  * Este método se llamará justo cuando el componente sea creado. 
  */
  ngOnInit() {
    this.evento_nombre = this.route.snapshot.paramMap.get('nombre');
    this.evento = new Evento();
    this.getEventoDetail();
  }

}
