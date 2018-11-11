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

  /**
   * Id de la agenda de las fechas
   */
  public idAgenda : number;
  /**
    * Shows or hides the fecha-create-component
    */
   showCreate: boolean;
   /**
    * Las fechas
    */
  @Input() fechas : Fecha[];
  /**
   * Cosntructor de fechaList
   * @param fechaService servicio de fecha
   * @param route ruta para fecha
   * @param router ruta para fechas
   */
  constructor(
    private fechaService : FechaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
  /**
   * Inicia fecha list
   */
  ngOnInit() {
    this.idAgenda = +this.route.snapshot.paramMap.get('id');
    this.obtenerFechas();
  }

  /**
   * Obtiene las fechas
   */
  obtenerFechas(){
    this.fechaService.getFechas(this.idAgenda)
      .subscribe(fechas => {
       this.fechas=fechas;
      }
      );
  }
  /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate;
}
}
