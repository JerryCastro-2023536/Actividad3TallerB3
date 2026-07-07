import type { producto } from "../models/producto.js";

export let productos : producto[] = [
    {
        id : 1,
        nombre : "Cafe",
        precio : 3,
        stock : 200,
        categoria : "comida",
        estado : "activo",
        fecha_registro : new Date().toLocaleDateString(),
        descuento : 22
    }
];