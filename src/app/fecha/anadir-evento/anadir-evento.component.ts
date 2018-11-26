import { Component, OnInit } from '@angular/core';
import { FechaService } from '../fecha.service';
import { ProveedorService } from 'src/app/proveedor/proveedor.service';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { EventoService } from 'src/app/evento/evento.service';
import { Evento } from 'src/app/evento/evento';
type DateString = {month: number, day: number, year: number};
@Component({
  selector: 'app-anadir-evento',
  templateUrl: './anadir-evento.component.html',
  styleUrls: ['./anadir-evento.component.css']
})
export class AnadirEventoComponent implements OnInit {

  /**
   * La agenda a la cual se le anadira el evento
   */
  idAgenda:number;
  /**
   * El dia en el que se anadira el evento
   */
  dia:any;
  /**
   * Jornada en la que se realizara el evento
   */
  jornada:string;

  /**
   * El evento que se va a anadir
   */
  idEvento:number;

  /**
   * Los proveedores a los que se puede elegir
   */
  proveedores:Proveedor[];

  /**
   * Los eventos disponibles
   */
  eventos:Evento[];

  /**
   * Crea el componente de anadir evento
   * @param fechaService servicio de fecha
   * @param proveedorService servicio de proveedor
   * @param eventoService servicio de evento
   */
  constructor(
    private fechaService: FechaService,
    private proveedorService: ProveedorService,
    private eventoService:EventoService
  ) { }

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.getProveedores();
    this.getEventos();
  }

  /**
   * Anade el evento a la fecha correspondiente
   */
  anadirEventoAFecha(){
    this.dia=""+ this.dia.year+"-"+(this.dia.month)+"-"+this.dia.day+"T00:00:00-05:00";   
    console.log(this.dia);
    console.log('OK')
    this.fechaService.anadirEventoAFecha(this.idAgenda, this.dia, this.jornada, this.idEvento);
  }
  /**
   * Obtiene los proveedores para mostrarlos
   */
  getProveedores(): void{
    this.proveedorService.getProveedores()
      .subscribe(
        (proveedores) =>{
          this.proveedores = proveedores;
          console.log(this.proveedores)
        }
      ) ;
  }
  /**
   * Obtiene los eventos para mostrarlos
   */
  getEventos(): void {
    this.eventoService.getEventos()
      .subscribe
      (
        (eventos) => { 
          this.eventos = eventos; 
        }
      );
  }
}
