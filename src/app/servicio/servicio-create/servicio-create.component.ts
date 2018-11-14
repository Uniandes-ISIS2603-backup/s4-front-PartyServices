import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Servicio } from '../servicio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  public servicio : Servicio;

  constructor(
    private servicioS : ServicioService,
    private toastrService : ToastrService
  ) { }

  ngOnInit() {
    this.servicio = new Servicio();
  }

  crearServicio():Servicio{
    this.servicioS.crateServicio(this.servicio)
      .subscribe((serv)=>{
        this.servicio=serv;
        this.create.emit();
        this.toastrService.success("Servico creado de manera correcta");
      })
    return this.servicio;
  }

  cancelCreation():void{
    this.cancel.emit();
  }
}
