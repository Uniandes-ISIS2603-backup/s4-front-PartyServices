
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ClienteDetail} from '../cliente-detail';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

/**
* Constructor for the component
* @param route The route which helps to retrieves the id of the cliente to be shown
* @param clienteService The Cliente's services provider
* @param toastrService The toastr to show messages to the user
*/
  constructor(
    private route: ActivatedRoute,
    private clienteService:ClienteService
  ) { }
  
  /**
    * El cliente
    */
    clienteDetail: ClienteDetail;
    
   /**
    * El id del cliente que viene en el path get .../clientes/cliente_id
    */
    cliente_Id: number;
    
    /**
    * The method which obtains the cliente whose details we want to show
    */
    getClienteDetail():void{
        this.clienteService.getClienteDetail(this.cliente_Id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
        });
    }

    /**
    * The method which initializes the component.
    * We need to create the cliente so it is never considered as undefined
    */
  ngOnInit() {
      this.cliente_Id = +this.route.snapshot.paramMap.get('id');
      this.clienteDetail = new ClienteDetail();
      this.getClienteDetail();
  }

}
