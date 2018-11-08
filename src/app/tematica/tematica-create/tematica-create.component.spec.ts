import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaCreateComponent } from './tematica-create.component';

describe('TematicaCreateComponent', () => {
  let component: TematicaCreateComponent;
  let fixture: ComponentFixture<TematicaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematicaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
