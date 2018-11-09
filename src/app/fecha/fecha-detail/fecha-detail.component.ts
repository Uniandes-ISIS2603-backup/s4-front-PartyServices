import { Component, OnInit, Input } from '@angular/core';
import { Fecha } from '../fecha';
import { FechaService } from '../fecha.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fecha-detail',
  templateUrl: './fecha-detail.component.html',
  styleUrls: ['./fecha-detail.component.css']
})
export class FechaDetailComponent implements OnInit {

  @Input() fecha : Fecha;
  @Input() eventos : any[];

  public idFecha : number;
  constructor(
    private fechaService : FechaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.idFecha = +this.route.snapshot.paramMap.get('idFecha');
    this.getFecha();
    this.getEventosFecha();
  }

  getFecha(){
    this.fechaService.getFecha(this.idFecha)
    .subscribe( fecha =>{
        this.fecha=fecha;
      }
    );
  }

  getEventosFecha(){
    this.fechaService.getEventosDeFecha(this.idFecha)
    .subscribe( eventos =>{
      this.eventos=eventos;
    } )
  }


  findFecha(){
    this.fechaService.findFecha(51,"2018-11-10T00:00:00-05:00","Tarde")
      .subscribe( fecha=>{
        this.fecha=fecha;
      }
    );
  }

}
