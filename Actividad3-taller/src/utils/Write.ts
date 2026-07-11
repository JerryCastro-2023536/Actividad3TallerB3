import { writeFile } from "fs/promises";
import type { cliente } from "../models/cliente.js";
import type { producto } from "../models/producto.js";

export async function writeCliente(clientes: cliente[]) {
    try {
        await writeFile("./src/data/Clientes.json", JSON.stringify(clientes, null, 2));
    } catch (error) {
        console.error("No se pudo escribir Clientes.json:", error instanceof Error ? error.message : error);
    }
}

export async function writeProducto(productos: producto[]) {
    try {
        await writeFile("./src/data/Productos.json", JSON.stringify(productos, null, 2));
    } catch (error) {
        console.error("No se pudo escribir Productos.json:", error instanceof Error ? error.message : error);
    }
}