import { Component, OnInit, Input } from '@angular/core';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sugerencia-detail',
  templateUrl: './sugerencia-detail.component.html',
  styleUrls: ['./sugerencia-detail.component.css']
})
export class SugerenciaDetailComponent implements OnInit {

  @Input() sugerencia : Sugerencia;

    public idTematica : number;

 
    public idSugerencia : number;
  
  constructor(
    private sugerenciaService : SugerenciaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
        this.idSugerencia = +this.route.snapshot.paramMap.get('idSugerencia');
        this.idTematica = +this.route.snapshot.paramMap.get('id');
        
        this.getSugerencia();
  }

  getSugerencia(){
    this.sugerenciaService.getSugerencia(this.idTematica,this.idSugerencia)
    .subscribe( sugerencia =>{
        this.sugerencia=sugerencia;
      }
    );
  }

  

}
