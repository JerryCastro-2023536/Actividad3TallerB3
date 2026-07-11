import { readFile } from "fs/promises";
import type { cliente } from "../models/cliente.js";
import type { producto } from "../models/producto.js";

export async function readClientes(): Promise<cliente[]> {
    try {
        const data = await readFile("./src/data/Clientes.json", "utf-8");
        return JSON.parse(data) as cliente[];
    } catch (error) {
        console.error("No se pudo leer Clientes.json:", error instanceof Error ? error.message : error);
        return [];
    }
}

export async function readProductos(): Promise<producto[]> {
    try {
        const data = await readFile("./src/data/Productos.json", "utf-8");
        return JSON.parse(data) as producto[];
    } catch (error) {
        console.error("No se pudo leer Productos.json:", error instanceof Error ? error.message : error);
        return [];
    }
}

