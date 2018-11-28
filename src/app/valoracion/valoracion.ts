import { Proveedor } from '../proveedor/proveedor';

import { Cliente } from '../cliente/cliente';


 export class Valoracion 
 {
    /**
     * El id de la valoracion
     */
    id : number ;
    
    /**
     * El titulo de la valoracion
     */
    titulo : string ;

  
    

    /**
     * El comentario del cliente
     */
    comentario: string;
   
    /**
     * Calificaion dispobible del proveedor
     */
     puntaje: number;

     /**
      * Proveedor calificado
      */
     proveedor: Proveedor ;
     
     
    /**
     * Cliente de la valoracion
     */
     cliente : Cliente;
     
    
   
     /**
     * El nombre del cliente
     */
   nombreUsuario: string;
   
   
    
 }


