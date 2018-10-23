import { Component, OnInit, Input } from '@angular/core';
import { Fecha } from '../fecha';
import { FechaService } from '../fecha.service';

@Component({
  selector: 'app-fecha-detail',
  templateUrl: './fecha-detail.component.html',
  styleUrls: ['./fecha-detail.component.css']
})
export class FechaDetailComponent implements OnInit {

  @Input() fecha : Fecha;

  constructor(private fechaService : FechaService) { }

  ngOnInit() {
    this.getFecha();
  }

  getFecha(){
    this.fechaService.getFecha(51,"2018-11-10T00:00:00-05:00","Tarde")
      .subscribe( fecha=>{
        this.fecha=fecha;
      }
    );
  }

}
