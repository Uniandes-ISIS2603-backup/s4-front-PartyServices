import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.css']
})
export class AgendaEditComponent implements OnInit {

  @Input() agenda : Agenda

  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();


  constructor(
    private agendaService : AgendaService,
    private toastrService : ToastrService
  ) { }

  ngOnInit() {
  }

  editarAgenda() : void {
    this.agendaService.updateAgenda(this.agenda)
      .subscribe(
        ()=>{
          this.toastrService.success("La agenda se ha actualizado","Actualizacion de la agenda")
        }
      )
    this.update.emit();
  }


  cancelarEdicion() : void {
    this.agenda=new Agenda();
    this.cancel.emit()
  }
}
