import { Component, OnInit, Input } from '@angular/core';
import { Fecha } from '../fecha';
import { FechaService } from '../fecha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from 'src/app/agenda/agenda.service';

@Component({
  selector: 'app-fecha-detail',
  templateUrl: './fecha-detail.component.html',
  styleUrls: ['./fecha-detail.component.css']
})
export class FechaDetailComponent implements OnInit {

  /**
   * La fecha
   */
  @Input() fecha : Fecha;

  /**
   * Los eventos de la fecha
   */
  @Input() eventos : any[];

  /**
   * El id de la fecha
   */
  public idFecha : number;

  /**
   * Constructor de  fechaDetail
   * @param fechaService servicio de fecha
   * @param route ruta 
   * @param router manejador de rutas
   */
  constructor(
    private fechaService : FechaService,
    private agendaService : AgendaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  /**
   * Inicia fechaDetail
   */
  ngOnInit() {
    this.idFecha = +this.route.snapshot.paramMap.get('idFecha');
    this.getFecha();
    this.getEventosFecha();
  }

  /**
   * Obtiene la fecha
   */
  getFecha(){
    this.fechaService.getFecha(this.idFecha)
    .subscribe( fecha =>{
        this.fecha=fecha;
      }
    );
  }

  /**
   * Obtiene los eventos de la fecha
   */
  getEventosFecha(){
    this.fechaService.getEventosDeFecha(this.idFecha)
    .subscribe( eventos =>{
      this.eventos=eventos;
    } )
  }

  /**
   * Encuentra la fecha
   */
  findFecha(){
    this.fechaService.findFecha(51,"2018-11-10T00:00:00-05:00","Tarde")
      .subscribe( fecha=>{
        this.fecha=fecha;
      }
    );
  }


  /**
   * Abandona un evento
   * @param idEvento el evento a abandonar
   */
  abandonarEvento(idEvento:string){
    console.log(idEvento);
    this.fechaService.eliminarEventoAFecha(this.fecha.id,idEvento).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
    
  }

  /**
   * Penitencia a un proveedor
   */
  penitenciarProveedor(){
    this.agendaService.updateAgenda(this.fecha.agenda);
  }

}
