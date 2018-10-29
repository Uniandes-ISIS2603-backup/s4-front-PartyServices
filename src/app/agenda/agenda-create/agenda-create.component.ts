import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit {

  /**
   * La nueva agenda
   */
  public agenda : Agenda;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  constructor( 
    private agendaService : AgendaService,
    private toastrService : ToastrService
     ) { }

  ngOnInit() {
  }

  crearAgenda() : Agenda{
    this.agendaService.createAgenda( this.agenda.proveedorDTO,this.agenda )
      .subscribe(
        agenda=>{
          this.agenda=agenda;
          this.create.emit();
          this.toastrService.success("La agenda fue creada", "Agenda creada");
        }
      )
    return this.agenda;
  }

}
