import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {TematicaService} from '../tematica.service';
import {TematicaDetail} from '../tematica-detail';


@Component({
    selector: 'app-tematica-edit',
    templateUrl: './tematica-edit.component.html',
    styleUrls: ['./tematica-edit.component.css']
})
export class TematicaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param tematicaService The tematica's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private tematicaService: TematicaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the tematica that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() tematica_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an tematica
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new tematica
    */
    @Output() update = new EventEmitter();

    /**
    * The tematica to edit
    */
    tematica: TematicaDetail;

    /**
    * Retrieves the information of the tematica
    */
    getTematica(): void {
        this.tematicaService.getTematicaDetail(this.tematica_id)
            .subscribe(tematica => {
                this.tematica = tematica;
            });
    }

    /**
    * Updates the tematica's information
    */
    editTematica(): void {
        this.tematicaService.updateTematica(this.tematica)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The tematica's information was updated", "Tematica edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the tematica
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.tematica = new TematicaDetail();
        this.getTematica();
    }

    /**
    * The function which is called every time the user chooses to edit a different tematica
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
