import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionDetailComponent } from './notificacion-detail.component';

describe('NotificacionDetailComponent', () => {
  let component: NotificacionDetailComponent;
  let fixture: ComponentFixture<NotificacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
