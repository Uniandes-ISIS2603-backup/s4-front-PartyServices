import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValoracionService } from '../valoracion.service';
import { Valoracion } from '../valoracion';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-valoracion-create',
  templateUrl: './valoracion-create.component.html',
  styleUrls: ['./valoracion-create.component.css']
})
export class ValoracionCreateComponent implements OnInit {


  public valoracion : Valoracion;

  public idProveedor : number;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new cliente
   */
   @Output() create = new EventEmitter();
  
   
  constructor(
    private valoracionService : ValoracionService,
    private route: ActivatedRoute,
    //private dp: DatePipe,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.idProveedor =+ this.route.snapshot.paramMap.get('id');
    this.valoracion=new Valoracion();
  }




  createValoracion():Valoracion{
        console.log(this.valoracion);
        
        
        this.valoracionService.createValoracion(this.valoracion,this.idProveedor)
            .subscribe((valoracion) => {
                this.valoracion = valoracion;
                this.create.emit();
                this.toastrService.success("La valoracion ha sido creado satisfactoriamente.", "Crear proveedor");
                
            });
            return this.valoracion;
    
    
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an cliente
    */
   cancelCreation(): void {
    this.toastrService.warning('No se pudo registrar la valoracion', 'Registrar valoracion');
    this.cancel.emit("Cancelado");
  }

}
