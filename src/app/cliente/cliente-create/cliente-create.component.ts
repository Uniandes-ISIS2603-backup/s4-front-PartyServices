import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

type DateString = {month: number, day: number, year: number};

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
  providers: [DatePipe]
})
export class ClienteCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param clienteService The cliente services provider  
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private clienteService:ClienteService,
        private toastrService: ToastrService,
        private router: Router
    ) {}
    
    /**
     * The new cliente
     */
     cliente: Cliente;
     
     /**
    * Cancels the creation of the new cliente
    * Redirects to the cliente list page
    */
    cancelCreation(): void {
        this.toastrService.warning('No se pudo registrar el cliente', 'Registrar cliente');
        this.router.navigate(['/clientes/list']);
    }
    
    /**
    * Creates a new cliente
    */
    createCliente(): cliente {
        /*let dateB: Date = new Date((<DateString> this.book.publishingdate).year, (<DateString> this.book.publishingdate).month, (<DateString> this.book.publishingdate).day);
        this.book.publishingdate = this.dp.transform(dateB, 'yyyy-MM-dd');*/
        this.clienteService.createCliente(this.cliente)
            .subscribe(cliente => {
                this.cliente.id = cliente.id;
                this.router.navigate(['/clientes/' + cliente.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.cliente;
    }

  ngOnInit() {
      this.cliente = new Cliente();
  }

}
