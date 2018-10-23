/**
* Esta clase representa un cliente de la aplicación.
* Contiene toda la información relevante de un cliente.
*/
export interface Cliente {
    /**
    * El ID del cliente
    */
    id: number;

    /**
    * El nombre del cliente
    */
    nombreUsuario: string;
    
    /**
    * La contraseña del cliente
    */
    contraseña: string;
    
    /**
    * El e-mail del cliente
    */
    email: string;
    
     /**
    * La fecha de nacimiento del cliente
    */
    //fechaNacimiento: Date;
    
}


