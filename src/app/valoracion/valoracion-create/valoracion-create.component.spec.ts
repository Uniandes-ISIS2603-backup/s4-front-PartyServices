import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionCreateComponent } from './valoracion-create.component';

describe('ValoracionCreateComponent', () => {
  let component: ValoracionCreateComponent;
  let fixture: ComponentFixture<ValoracionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
