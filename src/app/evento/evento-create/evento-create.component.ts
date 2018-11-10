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

  evento: Evento;


  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private toastrService: ToastrService

  ) { }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  createEvento(): Evento {
    this.eventoService.createEvento(this.evento).subscribe((evento) => {
      this.evento = evento;
      this.create.emit();
      this.toastrService.success("El evento fue creado", "Creacion Evento")
    })

    return this.evento;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.evento = new Evento();
  }

}
