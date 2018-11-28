import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../servicio';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { ProveedorService } from 'src/app/proveedor/proveedor.service';

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

  public showAdd:boolean;

  public proveedoresServicio:Proveedor[];

  public proveedores:Proveedor[];

  public idProveedor:number;

  constructor(
    private servicioS: ServicioService,
    private proveedorS: ProveedorService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.showAdd=false;
    this.idServicio = +this.route.snapshot.paramMap.get('idServicio');
    this.obtenerServicio();
    this.obtenerProveedoresServicio();
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
  obtenerProveedoresServicio(){
    this.servicioS.getProveedores(this.idServicio).subscribe(
      (proveedores)=>{
        this.proveedoresServicio=proveedores;
      }
    )
  }
  obtenerProveedores(){
    this.proveedorS.getProveedores().subscribe(
      (proveedores)=>{
        this.proveedores=proveedores;
      }
    )
  }

  showHideAdd(){
    this.showAdd=!this.showAdd;
  }

  anadirProveedor(){
    this.servicioS.postProveedor(this.idProveedor,this.idServicio).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
    
  }

}
