import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaDetailComponent } from './tematica-detail.component';

describe('TematicaDetailComponent', () => {
  let component: TematicaDetailComponent;
  let fixture: ComponentFixture<TematicaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematicaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
