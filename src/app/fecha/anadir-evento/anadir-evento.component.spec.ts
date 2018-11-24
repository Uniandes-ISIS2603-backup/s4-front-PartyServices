import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirEventoComponent } from './anadir-evento.component';

describe('AnadirEventoComponent', () => {
  let component: AnadirEventoComponent;
  let fixture: ComponentFixture<AnadirEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
