import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionListComponent } from './valoracion-list.component';

describe('ValoracionListComponent', () => {
  let component: ValoracionListComponent;
  let fixture: ComponentFixture<ValoracionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
