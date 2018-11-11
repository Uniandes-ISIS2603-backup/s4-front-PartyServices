import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../../evento/evento';
import { EventoService } from '../../evento/evento.service';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css'],
  providers: [DatePipe]
})
export class EventoCreateComponent implements OnInit {

  /**
   * Objeto que representa a un evento
   */
  evento: Evento;

  /**
   * Constructor del componente 
   * @param dp 
   * @param eventoService 
   * @param toastrService 
   */
  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private toastrService: ToastrService

  ) { }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  /**
  * Llama al servicio para crear el evento solicitado
  */
  createEvento(): Evento {
    this.eventoService.createEvento(this.evento).subscribe((evento) => {
      this.evento = evento;
      this.create.emit();
      this.toastrService.success("El evento fue creado", "Creacion Evento")
    })

    return this.evento;
  }

  /**
   * Cancela la creación del evento
   */
  cancelCreation(): void {
    this.cancel.emit();
  }
  /**
  * Esto inicializará el componente creando un evento vacio
  * Este método se llamará justo cuando el componente sea creado. 
  */
  ngOnInit() {
    this.evento = new Evento();
  }

}
