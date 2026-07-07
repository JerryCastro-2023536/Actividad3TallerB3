import type { Estado } from "../enum/estado.js";
import type { Tipo } from "../enum/tipo.js";

export interface cliente{
    id : number,
    nombre : string,
    edad : number,
    dpi : number,
    correo : string,
    telefono : number,
    estado : Estado,
    tipo_cliente : Tipo
}