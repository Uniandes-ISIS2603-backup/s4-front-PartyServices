import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  @Input() cliente ;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  /**
  * Llama al servicio para crear el evento solicitado
  */
  createEvento(): Evento {

    this.evento.dia=""+ this.evento.dia.year+"-"+(this.evento.dia.month)+"-"+this.evento.dia.day+"T00:00:00-00:00";   
    console.log(this.evento);
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
    this.evento.jornada = "Manana" ;
    this.evento.estado = "En planeacion" ;
  }

}
