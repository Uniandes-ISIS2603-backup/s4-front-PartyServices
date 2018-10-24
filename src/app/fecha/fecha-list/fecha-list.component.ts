import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Fecha } from '../fecha';
import { FechaService } from '../fecha.service';

@Component({
  selector: 'app-fecha-list',
  templateUrl: './fecha-list.component.html',
  styleUrls: ['./fecha-list.component.css']
})
export class FechaListComponent implements OnInit {

  public idAgenda : number;
  @Input() fechas : Fecha[];
  constructor(private fechaService : FechaService) { }

  ngOnInit() {
  }

  obtenerFechas(){
    this.fechaService.getFechas(51)
      .subscribe(fechas => {
        this.fechas=fechas;
      }
      );
    console.log(6)
  }
}
