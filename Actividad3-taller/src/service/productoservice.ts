import { productos } from "../data/productos.js";
import type { producto } from "../models/producto.js";
import type { Categoria } from "../enum/categoria.js";
import type { Estado } from "../enum/estado.js";

export function listarProductos(): producto[] {
    return productos;
}

export function buscarProducto(id: number) {
    return productos.find(p => p.id === id);
}

export function agregarProducto(
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: number,
    descuento: number
) {
    if (descuento < 0 || descuento > 100) {
        console.log("Descuento debe estar entre 0 y 100.");
        return;
    }

    if (productos.some(p => p.id === id)) {
        console.log("Ya existe un producto con ese ID.");
        return;
    }

    const categorias: Categoria[] = ["hogar", "comida", "electronico", "otro"];
    const cat: Categoria = categorias[categoria - 1] ?? "otro";

    const est: Estado = "activo";

    productos.push({
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock,
        categoria: cat,
        estado: est,
        fecha_registro: new Date().toLocaleDateString(),
        descuento: descuento
    });

    console.log("Producto agregado correctamente.");
}

export function actualizarProducto(
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: number,
    estado: number,
    descuento: number
) {
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        if (descuento < 0 || descuento > 100) {
            console.log("Descuento debe estar entre 0 y 100.");
            return;
        }
        const categorias: Categoria[] = ["hogar", "comida", "electronico", "otro"];
        const cat: Categoria = categorias[categoria - 1] ?? "otro";

        const est: Estado = estado === 2 ? "inactivo" : "activo";

        const productoEncontrado = productos[indice];

        productoEncontrado!.nombre = nombre;
        productoEncontrado!.precio = precio;
        productoEncontrado!.stock = stock;
        productoEncontrado!.categoria = cat;
        productoEncontrado!.estado = est;
        productoEncontrado!.descuento = descuento;

        console.log("Producto actualizado correctamente.");
    } else {
        console.log("El producto no existe para actualizar.");
    }
}

export function eliminarProducto(id: number) {
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log("Producto eliminado correctamente.");
    } else {
        console.log("Producto no encontrado.");
    }
}


export function CalcularIVA(id : number){
    const indice = productos.findIndex(p => p.id === id);

    if(indice !== -1){
        let subtotal = productos[indice].precio;
        let descuento = productos[indice].descuento / 100;
        const IVA = 0.12

        let total = subtotal + (IVA * subtotal) - (subtotal * descuento);
        
        console.log("|------ RESUMEN DEL PRODUCTO --------|");
        console.log("ID: " + productos[indice].id);
        console.log("Nombre: " + productos[indice].nombre);
        console.log("SubTotal: " + subtotal);
        console.log("IVA aplicado: " + IVA * 100 + "%");
        console.log("Descuento aplicado: " + productos[indice].descuento + "%");
        console.log("Total: " + total);
        console.log("|------------------------------------|")
    }else{
        console.log("Producto no encontrado");
    }
}