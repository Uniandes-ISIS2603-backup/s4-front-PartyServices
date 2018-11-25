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

  idAgenda:number;
  dia:any;
  jornada:string;
  idEvento:number;
  proveedores:Proveedor[];
  eventos:Evento[];
  constructor(
    private fechaService: FechaService,
    private proveedorService: ProveedorService,
    private eventoService:EventoService
  ) { }

  ngOnInit() {
    this.getProveedores();
    this.getEventos();
  }

  anadirEventoAFecha(){
    this.dia=""+ this.dia.year+"-"+(this.dia.month)+"-"+this.dia.day+"T00:00:00-05:00";   
    console.log(this.dia);
    console.log('OK')
    this.fechaService.anadirEventoAFecha(this.idAgenda, this.dia, this.jornada, this.idEvento);
  }
  getProveedores(): void{
    this.proveedorService.getProveedores()
      .subscribe(
        (proveedores) =>{
          this.proveedores = proveedores;
          console.log(this.proveedores)
        }
      ) ;
  }
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
