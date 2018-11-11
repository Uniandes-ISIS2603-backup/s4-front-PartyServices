import { Component, OnInit, Input } from '@angular/core';
import {TarjetaCredito} from '../tarjetaCredito';

@Component({
  selector: 'app-cliente-tarjetacredito',
  templateUrl: './cliente-tarjetacredito.component.html',
})
export class ClienteTarjetacreditoComponent implements OnInit {

  @Input() clienteTarjetaCredito : TarjetaCredito[];
  public isCollapsed = true;
  ngOnInit() {
  }

}
