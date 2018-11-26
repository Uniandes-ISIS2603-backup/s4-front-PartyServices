import { Proveedor } from '../proveedor/proveedor';

import { Cliente } from '../cliente/cliente';


 export class Valoracion 
 {
    /**
     * El id del producto
     */
    id : number ;

    /**
     * El nombre del cliente
     */
    nombreUsuario: string ;

    /**
     * El comentario del cliente
     */
    comentario: string ;
   
    /**
     * Calificaion dispobible del proveedor
     */
     puntaje: number ;

     /**
      * Proveedor calificado
      */
     proveedor: Proveedor ;
     
     
    /**
     * Cliente de la valoracion
     */
     cliente : Cliente;
 }


