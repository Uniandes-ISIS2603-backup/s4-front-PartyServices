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

  @Input() agenda : Agenda;
  @ViewChild(FechaDiaComponent) child:FechaDiaComponent;
  idAgenda : number;
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(
      private agendaService : AgendaService,
      private route: ActivatedRoute,
      private router: Router,
      private calendar: NgbCalendar
    ) { }

  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    this.getAgenda();
    this.model = this.calendar.getToday();
  }

  getAgenda(){
    this.agendaService.getAgenda(this.idAgenda)
      .subscribe( agenda =>{
        this.agenda=agenda;
      });
  }

  clickCalendar(){
    this.child.ngOnInit();
  }

}
