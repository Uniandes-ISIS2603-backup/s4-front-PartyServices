import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaCreateComponent } from './sugerencia-create.component';

describe('SugerenciaCreateComponent', () => {
  let component: SugerenciaCreateComponent;
  let fixture: ComponentFixture<SugerenciaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
