import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SugerenciaService } from '../sugerencia.service';
import { Sugerencia } from '../sugerencia';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-sugerencia-create',
  templateUrl: './sugerencia-create.component.html',
  styleUrls: ['./sugerencia-create.component.css']
})
export class SugerenciaCreateComponent implements OnInit {


  public sugerencia : Sugerencia;

  public idTematica : number;

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
    private sugerenciaService : SugerenciaService,
    private route: ActivatedRoute,
    //private dp: DatePipe,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.idTematica =+ this.route.snapshot.paramMap.get('id');
    this.sugerencia=new Sugerencia();
  }




  createSugerencia():Sugerencia{
        console.log(this.sugerencia);
        
        
        this.sugerenciaService.createSugerencia(this.sugerencia,this.idTematica)
            .subscribe((sugerencia) => {
                this.sugerencia = sugerencia;
                this.create.emit();
                this.toastrService.success("La sugerencia ha sido creado satisfactoriamente.", "Crear proveedor");
                
            });
            return this.sugerencia;
    
    
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
