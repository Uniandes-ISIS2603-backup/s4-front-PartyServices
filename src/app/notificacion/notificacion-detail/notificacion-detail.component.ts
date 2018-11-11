
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NotificacionService} from '../notificacion.service';
import {Notificacion} from '../notificacion';

@Component({
  selector: 'app-notificacion-detail',
  templateUrl: './notificacion-detail.component.html',
  styleUrls: ['./notificacion-detail.component.css']
})
export class NotificacionDetailComponent implements OnInit {

/**
* Constructor for the component
* @param route The route which helps to retrieves the id of the proveedor to be shown
* @param clienteService The proveedor's services provider
* @param toastrService The toastr to show messages to the user
*/
  constructor(
    private route: ActivatedRoute,
    private notificacionService:NotificacionService
  ) { }
  

    
   /**
    * El id del proveedor que viene en el path get .../proveedor/proveedor_id
    */
    notificacion: Notificacion;
    notificacion_Id: number;
    showCreate: boolean;
    

  ngOnInit() 
  {

    this.notificacion_Id = this.route.snapshot.paramMap.get('nombre') ;
    this.notificacion = new Notificacion() ;
    this.getNotificacionDetail() ;
  }

  getNotificacionDetail(): void {
    this.notificacionService.getNotificacionDetail(this.notificacion_Id)
       .subscribe(notificacion => {
           this.notificacion = notificacion;
       });
}
 
 


    
        showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    
    /**
    * The method which initializes the component.
    * We need to create the cliente so it is never considered as undefined
    */
  ngOnInit() {
      this.showCreate = false;
      this.notificacion_Id = +this.route.snapshot.paramMap.get('id');
      this.notificacion = new Notificacion();
      this.getNotificacionDetail();
  }

}
