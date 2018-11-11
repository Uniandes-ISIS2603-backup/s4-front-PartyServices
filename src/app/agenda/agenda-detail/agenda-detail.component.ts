import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FechaDiaComponent } from 'src/app/fecha/fecha-dia/fecha-dia.component';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {

  /**
   * La agenda a visualizar
   */
  @Input() agenda : Agenda;
  /**
   * Fecha dia component en el detail de agenda
   */
  @ViewChild(FechaDiaComponent) child:FechaDiaComponent;

  /**
   * Id de la agenda
   */
  idAgenda : number;
  /**
   * modelo del calendario
   */
  model: NgbDateStruct;
  /**
   * Fceha del calendario
   */
  date: {year: number, month: number};

  /**
   * Constructor de agendaDetail
   * @param agendaService servico de agenda
   * @param route ruta para agenda
   * @param router ruta para agendaa
   * @param calendar calendario en la agenda
   */
  constructor(
      private agendaService : AgendaService,
      private route: ActivatedRoute,
      private router: Router,
      private calendar: NgbCalendar
    ) { }

    /**
     * Inicializador de agenda detail
     */
  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    this.getAgenda();
    this.model = this.calendar.getToday();
  }

  /**
   * Obtiene la agenda
   */
  getAgenda(){
    this.agendaService.getAgenda(this.idAgenda)
      .subscribe( agenda =>{
        this.agenda=agenda;
      });
  }

  /**
   * Actualiza eventos del dia al oprimir el calendario
   */
  clickCalendar(){
    this.child.ngOnInit();
  }

}
