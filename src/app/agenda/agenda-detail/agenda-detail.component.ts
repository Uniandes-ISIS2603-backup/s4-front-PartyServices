import { Component, OnInit, Input } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {

  @Input() agenda : Agenda;
  idAgenda : number;

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(
      private agendaService : AgendaService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    this.getAgenda();
  }

  getAgenda(){
    this.agendaService.getAgenda(this.idAgenda)
      .subscribe( agenda =>{
        this.agenda=agenda;
      });
  }

}
