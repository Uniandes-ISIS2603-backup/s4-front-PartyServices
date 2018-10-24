
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import { ClienteListComponent } from './cliente-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

describe('ClienteListComponent', () => {
  let component: ClienteListComponent;
  let fixture: ComponentFixture<ClienteListComponent>;
  const clientes: Cliente[] = require('../../../assets/clientes.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ClienteListComponent ]
      providers: [{provide: APP_BASE_HREF, useValue: ''}, ClienteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a list of clientes', () => {
        component.clientes = clientes;
        expect(component.clientes.length).toEqual(clientes.length);
    });
    
    it('a book should be a cliente (first and last)', () => {
        component.clientes = clientes;
        //revisar todos los clientes
        expect(component.clientes[0].nombreUsuario).toEqual(clientes[0].nombreUsuario);
        expect(component.clientes[clientes.length - 1].nombreUsuario).toEqual(clientes[clientes.length - 1].nombreUsuario);
    });
});
