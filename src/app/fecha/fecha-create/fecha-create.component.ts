import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FechaService } from '../fecha.service';
import { Fecha } from '../fecha';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
type DateString = {month: number, day: number, year: number};

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
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new cliente
   */
   @Output() create = new EventEmitter();
  
   
  constructor(
    private fechaService : FechaService,
    private route: ActivatedRoute,
    //private dp: DatePipe,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.idAgenda =+ this.route.snapshot.paramMap.get('id');
    this.fecha=new Fecha();
  }


  crearFecha():Fecha{
    let dateB: Date = new Date(this.fecha.dia.day, this.fecha.dia.month-1, this.fecha.dia.year);
    //this.fecha.dia = this.dp.transform(dateB, 'dd/MM/yyyy');
    this.fecha.dia=""+ this.fecha.dia.year+"-"+(this.fecha.dia.month)+"-"+this.fecha.dia.day+"T00:00:00-00:00";   
    console.log(this.fecha);
    this.fechaService.crearFecha(this.fecha,this.idAgenda)
      .subscribe((fecha)=>{
        this.fecha=fecha;
        this.create.emit();
        this.toastrService.success("La agenda fue creada", "Agenda creada");
      });
    return this.fecha;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
   cancelCreation(): void {
    this.toastrService.warning('No se pudo registrar la fecha', 'Registrar fecha');
    this.cancel.emit("Cancelado");
  }

}
