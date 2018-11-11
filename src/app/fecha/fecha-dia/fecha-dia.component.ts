import { Component, OnInit, Input } from '@angular/core';
import { FechaService } from '../fecha.service';
import { ActivatedRoute } from '@angular/router';
import { Fecha } from '../fecha';
@Component({
  selector: 'app-fecha-dia',
  templateUrl: './fecha-dia.component.html',
  styleUrls: ['./fecha-dia.component.css']
})
export class FechaDiaComponent implements OnInit {

  /**
   * Id de la agenda
   */
  private idAgenda:number;

  /**
   * Dia seleccionado en el calendario
   */
  @Input()
  private dia:string;

  /**
   * Fecha de la manana
   */
  private fechaManana:Fecha;

  /**
   * Fecha de la tarde
   */
  private fechaTarde:Fecha;

  /**
   * Fecha de la noche
   */
  private fechaNoche:Fecha;

  /**
   * Eventos de la manana
   */
  private eventosManana:any[];

  /**
   * Eventos de la tarde
   */
  private eventosTarde:any[];

  /**
   * Eventos de la noche
   */
  private eventosNoche:any[];

  /**
   * Cosntructor de fechaDia
   * @param fechaS servicio de fecha
   * @param route ruta para fecha
   */
  constructor(
    private fechaS : FechaService,
    private route: ActivatedRoute
  ) { }

  /**
   * Inicia fecha dia
   */
  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    //this.dia = this.route.snapshot.paramMap.get('dia');
    this.fechaManana=new Fecha();
    this.fechaTarde=new Fecha();
    this.fechaNoche=new Fecha();
    this.eventosManana=[];
    this.eventosTarde=[];
    this.eventosNoche=[];
    console.log('ngOnInit')
    console.log(this.idAgenda);
    console.log(this.dia);
    this.fechaManana = new Fecha();
    this.fechaTarde = new Fecha();
    this.fechaNoche = new Fecha();
    this.obtenerFechas();
  }

  /**
   * Obtiene las fechas
   */
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
