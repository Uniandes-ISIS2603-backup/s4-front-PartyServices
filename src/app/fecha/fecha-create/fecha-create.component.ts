import { Component, OnInit, Output } from '@angular/core';
import { FechaService } from '../fecha.service';
import { Fecha } from '../fecha';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-fecha-create',
  templateUrl: './fecha-create.component.html',
  styleUrls: ['./fecha-create.component.css']
})
export class FechaCreateComponent implements OnInit {


  public fecha : Fecha;

  public idAgenda : number;
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
   //@Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new cliente
   */
  // @Output() create = new EventEmitter();
  
   
  constructor(
    private fechaService : FechaService
  ) { }

  ngOnInit() {
    this.fecha=new Fecha();
  }


  crearFecha():Fecha{
    console.log(this.fecha);
    this.fechaService.crearFecha(this.fecha,this.idAgenda);
    return this.fecha;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
  //  cancelCreation(): void {
  //   this.cancel.emit("Cancelado");
  // }

}
