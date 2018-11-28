import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../servicio';
import { Proveedor } from 'src/app/proveedor/proveedor';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  /**
   * Id del servicio
   */
  public idServicio:number;

  /**
   * Servicio a mostrar
   */
  public servicio:Servicio;

  public proveedoresServicio:Proveedor[]

  constructor(
    private servicioS: ServicioService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.idServicio = +this.route.snapshot.paramMap.get('idServicio');
    this.obtenerServicio();
    this.obtenerProveedores();
  }

  obtenerServicio(){
    this.servicioS.getServicio(this.idServicio)
      .subscribe(
        (servicio)=>{
          this.servicio=servicio;
        }
      )
  }
  obtenerProveedores(){
    this.servicioS.getProveedores(this.idServicio).subscribe(
      (proveedores)=>{
        this.proveedoresServicio=proveedores;
      }
    )
  }

}
