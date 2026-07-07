import type { cliente } from "../models/cliente.js";
import { Tipo } from "../enum/tipo.js";

export let clientes : cliente[] = [
    {
        id: 1,
        nombre: "Jerry",
        edad: 17,
        dpi: 2432532,
        correo: "Jerry@gmail.com",
        telefono: 12345,
        estado: "activo",
        tipo_cliente: Tipo.INICIAL
    }
];