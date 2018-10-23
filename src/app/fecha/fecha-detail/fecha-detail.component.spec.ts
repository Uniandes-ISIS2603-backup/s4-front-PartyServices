import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaDetailComponent } from './fecha-detail.component';

describe('FechaDetailComponent', () => {
  let component: FechaDetailComponent;
  let fixture: ComponentFixture<FechaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
