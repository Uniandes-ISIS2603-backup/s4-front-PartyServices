import { Agenda } from "../agenda/agenda";

/**
 * Esta clase representa a una fecha de la agenda de un proveedor
 * Contiene toda la informacion de una fecha
 */
export class Fecha
{
    /**
     * Id de la fecha
     */
    id : number;

    /**
     * Agenda a la que pertenece la fecha
     */
    agenda : Agenda;

    /**
     * Dia de la fecha
     */
    dia : string;

    /**
     * Jorndada de la fecha
     */
    jornada : string;

    /**
     * Eventos de la fecha
     */
    eventos : any;
}