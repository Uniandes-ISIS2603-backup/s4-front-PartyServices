import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { EventoService } from '../evento.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Evento } from './../evento';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css'],
  providers: [DatePipe]
})
export class EventoEditComponent implements OnInit,OnChanges {

  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private toastrService: ToastrService,
    private route: ActivatedRoute

  ) { }

  /**
     * The evento's name as received from the parent component
     */
  @Input() evento: Evento;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an evento
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new evento
  */
  @Output() update = new EventEmitter();

  /**
   * Updates the information of the author
   */
  editEvento(): void {

    this.eventoService.updateEvento(this.evento)
      .subscribe(() => {
        this.toastrService.success("The evento's information was updated", "evento edition");
      });
    this.update.emit();
  }

  /**
      * Emits the signal to tell the parent component that the
      * user no longer wants to create an user
      */
  cancelEdition(): void {
    this.cancel.emit();
  }


  ngOnInit() {
  }


  /**
    * This function will be called when the user chooses another producto to edit
    */
  ngOnChanges() {
    this.ngOnInit();
  }
}
