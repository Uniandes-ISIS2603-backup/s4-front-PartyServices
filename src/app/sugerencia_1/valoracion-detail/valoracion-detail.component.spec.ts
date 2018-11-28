import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionDetailComponent } from './valoracion-detail.component';

describe('ValoracionDetailComponent', () => {
  let component: ValoracionDetailComponent;
  let fixture: ComponentFixture<ValoracionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
