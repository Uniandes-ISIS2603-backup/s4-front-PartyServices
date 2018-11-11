import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Notificacion} from '../../notificacion/notificacion' ;
import {NotificacionService} from '../../notificacion/notificacion.service' ;
@Component({
  selector: 'app-notificacion-list',
  templateUrl: './notificacion-list.component.html',
  styleUrls: ['./notificacion-list.component.css']
})
export class NotificacionListComponent implements OnInit {


   /**
    * The list of books to display
    */
  notificaciones: Notificacion[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private notificacionService: NotificacionService) { }
   
   showCreate: boolean;


  getNotificaciones(): void{
    this.notificacionService.getNotificaciones()
    .subscribe(notificaciones =>{this.notificaciones = notificaciones}) ;
  }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

  ngOnInit() {
      
    this.showCreate = false;
    this.getNotificaciones();

  }
  

}
