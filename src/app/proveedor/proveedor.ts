import { Agenda } from "../agenda/agenda";
import { Productoo } from "../producto/producto";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 export class Proveedor 
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
    contrasenia: string ;

    /**
     * Nombre del dueño del producto
     */
    agenda: Agenda ;
    
    /**
     * Costo del producto
     */
    calificacion: number ;

    /**
     * Cantidad dispobible del producto
     */
     servicio: any ;

    /**
     * Cantidad dispobible del producto
     */
     notificaciones: any ;

    /**
     * Cantidad dispobible del producto
     */
     valoraciones: any ;

     /**
      * Proveedor del producto
      */
        catalogoProductos: any ;
 }



