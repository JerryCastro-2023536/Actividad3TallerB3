import type { Categoria } from "../enum/categoria.js";
import type { Estado } from "../enum/estado.js";

export interface producto{
    id : number,
    nombre : string,
    precio : number,
    stock : number,
    categoria : Categoria,
    estado : Estado,
    fecha_registro : string,
    descuento : number
}