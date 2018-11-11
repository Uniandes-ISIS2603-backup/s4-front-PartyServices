import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaDetailComponent } from './sugerencia-detail.component';

describe('SugerenciaDetailComponent', () => {
  let component: SugerenciaDetailComponent;
  let fixture: ComponentFixture<SugerenciaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
