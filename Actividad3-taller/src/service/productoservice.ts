import type { producto } from "../models/producto.js";
import type { Categoria } from "../enum/categoria.js";
import type { Estado } from "../enum/estado.js";
import { readProductos } from "../utils/Read.js";
import { writeProducto } from "../utils/Write.js";

const categorias: Categoria[] = ["hogar", "comida", "electronico", "otro"];

export async function listarProductos(): Promise<producto[]> {
    return await readProductos();
}

export async function buscarProducto(id: number): Promise<producto | undefined> {
    const productos = await readProductos();
    return productos.find(p => p.id === id);
}

export async function agregarProducto(
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: number,
    estado: number,
    descuento: number
) {
    if (descuento < 0 || descuento > 100) {
        console.log("Descuento debe estar entre 0 y 100.");
        return;
    }

    const productos = await readProductos();

    if (productos.some(p => p.id === id)) {
        console.log("Ya existe un producto con ese ID.");
        return;
    }

    const cat: Categoria = categorias[categoria - 1] ?? "otro";
    const est: Estado = estado === 2 ? "inactivo" : "activo";

    productos.push({
        id,
        nombre,
        precio,
        stock,
        categoria: cat,
        estado: est,
        fecha_registro: new Date().toLocaleDateString(),
        descuento,
    });

    await writeProducto(productos);
    console.log("Producto agregado correctamente.");
}

export async function actualizarProducto(
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: number,
    estado: number,
    descuento: number
) {
    const productos = await readProductos();
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        if (descuento < 0 || descuento > 100) {
            console.log("Descuento debe estar entre 0 y 100.");
            return;
        }

        const cat: Categoria = categorias[categoria - 1] ?? "otro";
        const est: Estado = estado === 2 ? "inactivo" : "activo";

        productos[indice] = {
            ...productos[indice],
            nombre,
            precio,
            stock,
            categoria: cat,
            estado: est,
            descuento,
        };

        await writeProducto(productos);
        console.log("Producto actualizado correctamente.");
    } else {
        console.log("El producto no existe para actualizar.");
    }
}

export async function eliminarProducto(id: number) {
    const productos = await readProductos();
    const indice = productos.findIndex(p => p.id === id);

    if (indice !== -1) {
        productos.splice(indice, 1);
        await writeProducto(productos);
        return "Producto eliminado correctamente.";
    }

    return "Producto no encontrado.";
}

export async function CalcularIVA(id: number) {
    const producto = await buscarProducto(id);

    if (!producto) {
        console.log("Producto no encontrado");
        return;
    }

    const subtotal = producto.precio;
    const descuento = producto.descuento / 100;
    const IVA = 0.12;
    const total = subtotal + IVA * subtotal - subtotal * descuento;

    console.log("|------ RESUMEN DEL PRODUCTO --------|");
    console.log("ID: " + producto.id);
    console.log("Nombre: " + producto.nombre);
    console.log("SubTotal: " + subtotal);
    console.log("IVA aplicado: " + IVA * 100 + "%");
    console.log("Descuento aplicado: " + producto.descuento + "%");
    console.log("Total: " + total);
    console.log("|------------------------------------|");
}
