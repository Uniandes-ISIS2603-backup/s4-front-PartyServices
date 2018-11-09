import { Component, OnInit } from '@angular/core';
import { FechaService } from '../fecha.service';
import { ActivatedRoute } from '@angular/router';
import { Fecha } from '../fecha';
@Component({
  selector: 'app-fecha-dia',
  templateUrl: './fecha-dia.component.html',
  styleUrls: ['./fecha-dia.component.css']
})
export class FechaDiaComponent implements OnInit {

  private idAgenda:number;

  private dia:string;

  private fechaManana:Fecha;

  private fechaTarde:Fecha;

  private fechaNoche:Fecha;

  private eventosManana:any[];

  private eventosTarde:any[];

  private eventosNoche:any[];

  constructor(
    private fechaS : FechaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    this.dia = this.route.snapshot.paramMap.get('dia');
    console.log(this.idAgenda);
    console.log(this.dia);
    this.fechaManana = new Fecha();
    this.fechaTarde = new Fecha();
    this.fechaNoche = new Fecha();
    this.obtenerFechas();
  }

  obtenerFechas():void{
    this.fechaS.getFechaByAgendaDiaJornada(this.idAgenda,this.dia,"Manana")
      .subscribe(
        (fecha)=>{
          this.fechaManana=fecha;
            this.fechaS.getEventosDeFecha(fecha.id)
              .subscribe( eventos =>{
              this.eventosManana=eventos
             } )
            }
      );
      this.fechaS.getFechaByAgendaDiaJornada(this.idAgenda,this.dia,"Tarde")
      .subscribe(
        (fecha)=>{
          this.fechaTarde=fecha;
          this.fechaS.getEventosDeFecha(fecha.id)
              .subscribe( eventos =>{
              this.eventosTarde=eventos
             } )
        }
      );
      this.fechaS.getFechaByAgendaDiaJornada(this.idAgenda,this.dia,"Noche")
      .subscribe(
        (fecha)=>{
          this.fechaNoche=fecha;
          this.fechaS.getEventosDeFecha(fecha.id)
              .subscribe( eventos =>{
              this.eventosNoche=eventos
             } )
        }
      );
  }


}
