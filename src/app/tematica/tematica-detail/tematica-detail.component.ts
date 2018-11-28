import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TematicaService } from '../tematica.service';
import { TematicaDetail } from '../tematica-detail';
import { ToastrService } from 'ngx-toastr';

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
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) { }

    /**
    * The tematica whose details we want to show
    */
    tematica: TematicaDetail;

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
                this.tematica = tematicaDetail
            });
    }
    /**
   * Shows or hides the edit component
   */
    showHideEdit(tematica_id: number): void {
        if (!this.showEdit || (this.showEdit && tematica_id != this.tematica.id)) {
            this.showEdit = true;
            this.tematica_id = tematica_id;
        }
        else {
            this.showEdit = false;
        }
    }

    /**
     * Metodo que actualiza una tematica
     */
    updateTematica(): void {
        this.showEdit = !this.showEdit;
    }

    /**
     * Metodo que elimina la tematica con el id enviado por parametro
     * @param tematicaId 
     */
    deleteTematica(tematicaId): void{
        
      this.tematicaService.deleteTematica(tematicaId).subscribe(() =>
      {this.toastrService.error("La tematica fue borrada satisfactoriamente", "Tematica borrada")}) ;
       this.ngOnInit();

    }


    /**
    * The method which initializes the component
    * We need to initialize the tematica so it is never considered as undefined
    */
    ngOnInit() {

        this.showEdit = false;
        this.tematica_id = +this.route.snapshot.paramMap.get('id');
        this.tematica = new TematicaDetail();
        this.getTematicaDetail();
    }

}
