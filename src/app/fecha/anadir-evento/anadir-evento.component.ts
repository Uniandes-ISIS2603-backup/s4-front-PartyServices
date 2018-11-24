import { Component, OnInit } from '@angular/core';
import { FechaService } from '../fecha.service';

@Component({
  selector: 'app-anadir-evento',
  templateUrl: './anadir-evento.component.html',
  styleUrls: ['./anadir-evento.component.css']
})
export class AnadirEventoComponent implements OnInit {

  idProveedor:number;
  dia:string;
  jornada:string;
  idEvento:number;
  constructor(
    private fechaService: FechaService
  ) { }

  ngOnInit() {
  }

  anadirEventoAFecha(){
    console.log('OK')
    this.fechaService.anadirEventoAFecha(this.idProveedor, this.dia, this.jornada, this.idEvento);
  }
}
