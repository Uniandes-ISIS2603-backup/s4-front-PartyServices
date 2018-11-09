import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaDiaComponent } from './fecha-dia.component';

describe('FechaDiaComponent', () => {
  let component: FechaDiaComponent;
  let fixture: ComponentFixture<FechaDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
