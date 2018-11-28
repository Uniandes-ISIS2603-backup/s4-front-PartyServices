import {Component, OnInit} from '@angular/core';

import {Tematica} from '../tematica';
import {TematicaService} from '../tematica.service';

/**
* The component for the list of tematicas
*/
@Component({
    selector: 'app-tematica',
    templateUrl: './tematica-list.component.html',
    styleUrls: ['./tematica-list.component.css']
})
export class TematicaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param tematicaService The author's services provider
    */
    constructor(
        private tematicaService: TematicaService,
    ) {}

    /**
    * The list of tematicas 
    */
    tematicas: Tematica[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * The id of the tematica being edited.
     */
    tematica_edit_id: number;

    /**
    * Asks the service to update the list of tematicas
    */
    getTematicas(): void {
        this.tematicaService.getTematicas()
            .subscribe(tematicas => {
                this.tematicas = tematicas;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {

        this.showCreate = !this.showCreate!
    }

   

    /**
    * This will initialize the component by retrieving the list of tematicas from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.getTematicas();
    }
}


