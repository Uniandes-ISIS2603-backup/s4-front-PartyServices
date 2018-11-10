
import {Valoracion} from '../valoracion/valoracion';
import {Cliente} from './cliente';

export class ClienteDetail extends Cliente{
    /**
     * Las valoraciones del cliente
     */
     valoraciones: Valoracion[];
}

