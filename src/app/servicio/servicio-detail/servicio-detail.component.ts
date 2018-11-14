import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  public idServicio:number;

  public servicio:Servicio;

  constructor(
    private servicioS: ServicioService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.idServicio = +this.route.snapshot.paramMap.get('idServicio');
    this.obtenerServicio();
  }

  obtenerServicio(){
    this.servicioS.getServicio(this.idServicio)
      .subscribe(
        (servicio)=>{
          this.servicio=servicio;
        }
      )
  }

}
