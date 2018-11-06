import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';

import {Tematica} from '../../tematica/tematica' ;
import {TematicaService} from '../../tematica/tematica.service' ;
@Component({
  selector: 'app-tematica-list',
  templateUrl: './tematica-list.component.html',
  styleUrls: ['./tematica-list.component.css']
})
export class TematicaListComponent implements OnInit {


   /**
    * The list of tematicas to display
    */
  tematicas: Tematica[] ;

  /**
    * The component's constructor
    */
   /*, private route: ActivatedRoute
   */
  constructor(private tematicaService: TematicaService) { }

 // alltematicas: string = 'no' ;


  getTematicas(): void{
    this.tematicaService.getTematicas()
    .subscribe(tematicas =>{this.tematicas = tematicas}) ;
  }


  ngOnInit() {
    this.getTematicas() ;
  /*  this.route.queryParams
    .filter(params => params.alltematicas)
    .subscribe(params => {
      console.log(params);
      this.alltematicas = params.alltematicas ;
    console.log(this.alltematicas) ;
    }) ;

    if(this.alltematicas == 'yes'){
      console.log('alltematicas') ;
      this.getTematicas ;
    }
*/
  }

}
