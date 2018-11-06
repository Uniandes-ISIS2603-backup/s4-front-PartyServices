import { Component, OnInit } from '@angular/core';
import{ProductoService } from '../../producto/producto.service';
import { ActivatedRoute } from '@angular/router';
import{Producto} from '../../producto/producto' ;
@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {


  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute 

  ) { }

  producto: Producto;

  producto_nombre: string ;
    

  ngOnInit() 
  {

    this.producto_nombre = this.route.snapshot.paramMap.get('nombre') ;
    this.producto = new Producto() ;
    this.getProductoDetail() ;
  }

  getProductoDetail(): void {
    this.productoService.getProductoDetail(this.producto_nombre)
       .subscribe(producto => {
           this.producto = producto;
       });
}
 
 

}
