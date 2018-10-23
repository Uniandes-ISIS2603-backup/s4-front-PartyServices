import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaListComponent } from './fecha-list.component';

describe('FechaListComponent', () => {
  let component: FechaListComponent;
  let fixture: ComponentFixture<FechaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
