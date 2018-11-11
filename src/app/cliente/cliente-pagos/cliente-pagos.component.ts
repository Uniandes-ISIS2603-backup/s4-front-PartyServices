import { Component, OnInit, Input } from '@angular/core';
import {Pago} from '../pago';
@Component({
  selector: 'app-cliente-pagos',
  templateUrl: './cliente-pagos.component.html',
})
export class ClientePagosComponent implements OnInit {

  @Input() clientePagos : Pago[];
  public isCollapsed = true;
  ngOnInit() {
  }

}
