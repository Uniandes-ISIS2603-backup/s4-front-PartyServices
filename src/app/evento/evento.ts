import { Cliente } from "../cliente/cliente";
import { Producto } from "../producto/producto";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Evento 
{

id: number ;

nombre: string ;

estado: string ;

dia: any ;

jornada: string ;

fecha: string ;

latitud: number ;

longitud: number ;

cliente: Cliente ;

productos: Producto[];









}
