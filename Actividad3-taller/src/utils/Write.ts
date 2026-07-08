import { writeFile } from "fs/promises";
import { cliente } from "../models/cliente";
import { producto } from "../models/producto";

export async function writeCliente(clientes : cliente[]) {
    try{
        await writeFile("./src/data/Clientes.json", JSON.stringify(clientes, null, 2));
    }catch(error){
        console.error("No se pudo agregar")
    }
}

export async function writeProducto(productos : producto[]){
    try{
        await writeFile("./src/data/Productos.json", JSON.stringify(productos, null, 2));
    }catch(error){
        console.error("No se pudo agregar");
    }
}