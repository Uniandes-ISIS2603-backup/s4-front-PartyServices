import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaCreateComponent } from './fecha-create.component';

describe('FechaCreateComponent', () => {
  let component: FechaCreateComponent;
  let fixture: ComponentFixture<FechaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
