import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {TematicaService} from '../tematica.service';

import {Tematica} from '../tematica';

@Component({
    selector: 'app-tematica-create',
    templateUrl: './tematica-create.component.html',
    styleUrls: ['./tematica-create.component.css']
})
export class TematicaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param tematicaService The tematicas' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private tematicaService: TematicaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new tematica
    */
    tematica: Tematica;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an tematica
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new tematica
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new tematica
    */
    createTematica(): Tematica {
        this.tematicaService.createTematica(this.tematica)
            .subscribe((tematica) => {
                this.tematica = tematica;
                this.create.emit();
                this.toastrService.success("The tematica was created", "Tematica creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.tematica;
    }

    /**
    * Informs the parent component that the user no longer wants to create an tematica
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.tematica = new Tematica();
    }
}
