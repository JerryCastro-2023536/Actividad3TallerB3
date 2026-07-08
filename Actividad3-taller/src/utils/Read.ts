import { readFile } from "fs/promises";
import type { producto } from "../models/producto.js";

export async function readClientes() {
    try{
        const data = await readFile("./src/data/Clientes.json", "utf-8");
        return JSON.parse(data);
    }catch(error : any){
        if (error instanceof SyntaxError) {
            console.error("El archivo contiene un JSON inválido.");
            return "";
        }

        console.error(error.message);
        return "";
    }
}

export async function readProductos() {
    try{
        const data = await readFile("./src/data/Productos.json", "utf-8");
        return JSON.parse(data) as producto[];
    }catch(error){
        console.error("No se pudo leer Productos.json:", error instanceof Error ? error.message : error);
        return [];
    }
}

