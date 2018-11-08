import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { TematicaListComponent } from './tematica-list.component';
import { Tematica } from '../tematica';
import { TematicaService } from '../tematica.service';

describe('TematicaComponent', () => {
    let component: TematicaListComponent;
    let fixture: ComponentFixture<TematicaListComponent>;
    const tematicas: Tematica[] = require('../../../assets/tematicas.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, TematicaService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TematicaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of tematicas', () => {
        component.tematicas = tematicas;
        expect(component.tematicas.length).toEqual(tematicas.length);
    });

    it('an author should be an tematicas (first and last)', () => {
        component.tematicas = tematicas;
        expect(component.tematicas[0].name).toEqual(tematicas[0].name);
        expect(component.tematicas[tematicas.length - 1].name).toEqual(tematicas[tematicas.length - 1].name);
    });

});