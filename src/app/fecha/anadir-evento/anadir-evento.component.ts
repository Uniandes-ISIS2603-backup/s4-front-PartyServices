import { Component, OnInit } from '@angular/core';
import { FechaService } from '../fecha.service';
import { ProveedorService } from 'src/app/proveedor/proveedor.service';
import { Proveedor } from 'src/app/proveedor/proveedor';
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
  constructor(
    private fechaService: FechaService,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit() {
    this.getProveedores();
    
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
}
