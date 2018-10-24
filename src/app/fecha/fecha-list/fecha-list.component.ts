import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Fecha } from '../fecha';
import { FechaService } from '../fecha.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fecha-list',
  templateUrl: './fecha-list.component.html',
  styleUrls: ['./fecha-list.component.css']
})
export class FechaListComponent implements OnInit {

  public idAgenda : number;
  @Input() fechas : Fecha[];
  constructor(
    private fechaService : FechaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.idAgenda =+ this.route.snapshot.paramMap.get('id');
    this.obtenerFechas();
  }

  obtenerFechas(){
    this.fechaService.getFechas(this.idAgenda)
      .subscribe(fechas => {
        this.fechas=fechas;
      }
      );
  }
}
