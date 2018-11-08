import {Producto} from '../producto/producto';
import {Proveedor} from './proveedor';

export class ProveedorDetail extends Proveedor{
    /**
     * Los Productos del proveedor
     */
     productos: Producto[];
}


