/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 export interface Valoracion 
 {
    /**
     * El id del producto
     */
    id : number ;

    /**
     * El nombre del cliente
     */
    nombre: string ;

    /**
     * El comentario del cliente
     */
    comentario: string ;
   
    /**
     * Calificaion dispobible del proveedor
     */
     calificacion: number ;

     /**
      * Proveedor del producto
      */
        proveedor: any ;
 }


