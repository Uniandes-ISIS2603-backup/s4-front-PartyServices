import { Component, OnInit, Input } from '@angular/core';
import { Valoracion } from '../valoracion';
import { ValoracionService } from '../valoracion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-valoracion-detail',
  templateUrl: './valoracion-detail.component.html',
  styleUrls: ['./valoracion-detail.component.css']
})
export class ValoracionDetailComponent implements OnInit {

  @Input() valoracion : Valoracion;

    public idProveedor : number;

 
    public idValoracion : number;
  
  constructor(
    private valoracionService : ValoracionService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
        this.idValoracion = +this.route.snapshot.paramMap.get('idValoracion');
        this.idProveedor = +this.route.snapshot.paramMap.get('id');
        
        this.getValoracion();
  }

  getValoracion(){
    this.valoracionService.getValoracion(this.idProveedor,this.idValoracion)
    .subscribe( valoracion =>{
        this.valoracion=valoracion;
      }
    );
  }

  

}
