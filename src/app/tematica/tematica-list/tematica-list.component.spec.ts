import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TematicaListComponent } from './tematica-list.component';

describe('TematicaListComponent', () => {
  let component: TematicaListComponent;
  let fixture: ComponentFixture<TematicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TematicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TematicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
