/**
 * Esta clase representa una agenda de un proveedor
 * Ccontiene toda la informacion relevante a una agenda
 */
export class Agenda
{

    /**
     * Id de la agenda
     */
    id : number;

    /**
     * Fecha de penitencia
     */
    fechaPenitencia : string;

    /**
     * Proveedor de la agenda
     */
    proveedorDTO : any;

    /**
     * Jornada de los lunes que no labora
     */
    jornadaLunesND : string;

    /**
     * Jornada de los martes que no labora
     */
    jornadaMartesND : string;

    /**
     * Jornada de los miercoles que no labora
     */
    jornadaMiercolesND : string;

    /**
     * Jornada de los jueves que no labora
     */
    jornadaJuevesND : string;

    /**
     * Jornada de los viernes que no labora
     */
    jornadaViernesND : string;

    /**
     * Jornada de los sabados que no labora
     */
    jornadaSabadoND : string;

    /**
     * Jornada de los domingos que no labora
     */
    jornadaDomingoND : string;

    
}