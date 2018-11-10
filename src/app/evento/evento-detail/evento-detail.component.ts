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

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute 

  ) { }

  evento: Evento;

  evento_nombre: string ;

    getEventoDetail():void{
      this.eventoService.getEventoDetail(this.evento_nombre)
       .subscribe(evento => {
           this.evento = evento;
       });


    }

  ngOnInit() {
    this.evento_nombre = this.route.snapshot.paramMap.get('nombre') ;
    this.evento = new Evento () ;
    this.getEventoDetail() ;
  }

}
