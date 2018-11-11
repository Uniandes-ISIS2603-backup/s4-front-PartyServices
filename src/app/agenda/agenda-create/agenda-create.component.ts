import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
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

  /**
   * Id del proveedor de la agenda
   */
  @Input()public proveedorId: number;

  /**
   * Evento de cancelacion
   */
  @Output() cancel = new EventEmitter();
  /**
   * evento de creacion
   */
  @Output() create = new EventEmitter();

  /**
   * Constructor de agenda create
   * @param agendaService servicio de agenda
   * @param toastrService servicio para excwpciones
   */
  constructor( 
    private agendaService : AgendaService,
    private toastrService : ToastrService
     ) { }

     /**
      * Inicializador de agendaCreate
      */
  ngOnInit() {
    this.agenda=new Agenda();
    this.agenda.jornadaLunesND="Ninguna";
    this.agenda.jornadaMartesND="Ninguna";
    this.agenda.jornadaMiercolesND="Ninguna";
    this.agenda.jornadaJuevesND="Ninguna";
    this.agenda.jornadaViernesND="Ninguna";
    this.agenda.jornadaSabadoND="Ninguna";
    this.agenda.jornadaDomingoND="Ninguna";
  }

  /**
   * Crea la agenda
   */
  crearAgenda() : Agenda{
    console.log(this.agenda);
    this.agendaService.createAgenda( this.proveedorId,this.agenda )
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
