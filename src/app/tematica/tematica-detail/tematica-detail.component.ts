import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TematicaService } from '../tematica.service';
import { Tematica } from '../tematica';
import { TematicaDetail } from '../tematica-detail';

@Component({
    selector: 'app-tematica-detail',
    templateUrl: './tematica-detail.component.html',
    styleUrls: ['./tematica-detail.component.css']
})
export class TematicaDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param tematicaService The tematica's service
    * @param route The route element which helps to obtain the tematica's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private tematicaService: TematicaService,
        private route: ActivatedRoute
    ) { }

    /**
    * The tematica whose details we want to show
    */
    tematicaDetail: TematicaDetail;

    /**
    * The tematica's id retrieved from the address
    */
    tematica_id: number;

    /**
    * Shows or hides the edition of an product
    */
    showEdit: boolean;



    /**
    * The method which retrieves the servicios of an tematica
    */
    getTematicaDetail(): void {
        this.tematicaService.getTematicaDetail(this.tematica_id)
            .subscribe(tematicaDetail => {
                this.tematicaDetail = tematicaDetail
            });
    }
     /**
    * Shows or hides the edit component
    */
   showHideEdit(tematica_id: number): void {
    if (!this.showEdit || (this.showEdit && tematica_id != this.tematica_id)) {     
        this.showEdit = true;
        this.tematica_id = tematica_id;
    }
    else {
        this.showEdit = false;
    }
}

updateTematica(): void {
    this.showEdit = false;
}



    /**
    * The method which initializes the component
    * We need to initialize the tematica so it is never considered as undefined
    */
    ngOnInit() {
        this.tematica_id = +this.route.snapshot.paramMap.get('id');
        this.tematicaDetail = new TematicaDetail();
        this.getTematicaDetail();
    }

}
