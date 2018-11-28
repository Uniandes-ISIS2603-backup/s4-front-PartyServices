import { Tematica } from '../tematica/tematica';

import { Cliente } from '../cliente/cliente';

 export class Sugerencia 
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
     * Tematica de la sugerencia
     */
    tematica: Tematica ;
    
    /**
     * titulo de la sugerencia
     */
    titulo: string;
    
    /**
     * video de la sugerencia
     */
    video: string;
    
    /**
     * imagen de la sugerencia
     */
    link: string;
     
    /**
     * Cliente de la sugerencia
     */
     cliente : Cliente;
 }


