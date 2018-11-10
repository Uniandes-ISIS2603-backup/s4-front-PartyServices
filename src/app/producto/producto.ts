import { Proveedor } from "../proveedor/proveedor";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 export class Producto 
 {
    /**
     * El id del producto
     */
    id : number ;

    /**
     * El nombre del producto
     */
    nombre: string ;

    /**
     * El tipo de servicio del producto
     */
    tipoServicio: string ;

    /**
     * Nombre del dueño del producto
     */
    duenio: string ;
    
    /**
     * Costo del producto
     */
    costo: number ;

    /**
     * Cantidad dispobible del producto
     */
     cantidad: number ;

     /**
      * Proveedor del producto
      */
        proveedor: Proveedor;
 }


