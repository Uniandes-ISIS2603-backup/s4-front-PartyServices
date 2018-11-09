import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaEditComponent } from './tematica-edit.component';

describe('TematicaEditComponent', () => {
  let component: TematicaEditComponent;
  let fixture: ComponentFixture<TematicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
