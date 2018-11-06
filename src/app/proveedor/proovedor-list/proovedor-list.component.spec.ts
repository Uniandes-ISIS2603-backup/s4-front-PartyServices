import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProovedorListComponent } from './proovedor-list.component';

describe('ProovedorListComponent', () => {
  let component: ProovedorListComponent;
  let fixture: ComponentFixture<ProovedorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProovedorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProovedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
