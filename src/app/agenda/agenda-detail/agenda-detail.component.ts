import { Component, OnInit, Input } from '@angular/core';
import { Agenda } from '../agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {

  @Input agenda : Agenda;

  constructor(private agendaService : AgendaService) { }

  ngOnInit() {
    this.getAgenda();
  }

  getAgenda(){
    // this.agendaService.getAgenda(51)
    //   .subscribe( agenda =>{
    //     this.agenda=agenda;
    //   });
  }

}
