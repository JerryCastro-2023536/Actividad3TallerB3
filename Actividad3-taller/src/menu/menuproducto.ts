import { agregarProducto, listarProductos, actualizarProducto, eliminarProducto, buscarProducto, CalcularIVA } from "../service/productoservice";
import { rl, clearConsole, esperarTecla } from "../utils/readline";
import { menu } from "./menu";

export async function menuProducto() {
    clearConsole();
    console.log("|-------- GESTIÓN DE PRODUCTOS ----------|");
    console.log("1. Listar Productos");
    console.log("2. Agregar Producto");
    console.log("3. Actualizar Producto");
    console.log("4. Buscar Producto");
    console.log("5. Eliminar Producto");
    console.log("6. Total del Producto");
    console.log("0. Volver al Menú Principal");
    console.log("|----------------------------------------|");

    let opcion = await rl.question("Selecciona una opcion: ");

    switch (opcion.trim()) {
        case "1":
            clearConsole();
            console.log("|-------- LISTA DE PRODUCTOS ----------|");
            console.log(listarProductos());
            esperarTecla(() => menuProducto());
            break;
        case "2":
            clearConsole();
            agregarDatos();
            break;
        case "3":
            clearConsole();
            actualizarDatos();
            break;
        case "4":
            clearConsole();
            console.log("|---- Buscar -----|");
            const idBuscar = await rl.question("Ingrese el ID que busca: ")
            console.log(buscarProducto(Number(idBuscar)));
            break;
        case "5":
            clearConsole();
            console.log("|---- Eliminar -----|");
            const idEliminar = await rl.question("Ingrese el ID que va eliminar: ")
            eliminarProducto(Number(idEliminar));
            break;
        case "6":
            clearConsole();
            const idIVA = await rl.question("Ingrese el ID del producto: ")
            CalcularIVA(Number(idIVA));
            break;
        case "0":
            console.log("Regresando al menú...");
            menu();
            break;
        default:
            console.log("Opción no válida.");
            esperarTecla(() => menuProducto());
            break;
    }

}

async function agregarDatos() {
    console.log("|---- Registro de Producto ----|");

    const p_id = await rl.question("ID del producto: ");
    const p_nombre = await rl.question("Nombre: ");
    const p_precio = await rl.question("Precio: ");
    const p_stock = await rl.question("Stock: ");
    const p_categoria = await rl.question("Categoría (1: Hogar, 2: Comida, 3: Electrónico, 4: Otro): ");
    const p_descuento = await rl.question("Descuento (0-100): ");
    
    agregarProducto(Number(p_id), p_nombre, Number(p_precio), Number(p_stock), Number(p_categoria), Number(p_descuento));
                    
}

async function actualizarDatos(){
    console.log("|---- Actualizar Producto ----|");

    const p_id = await rl.question("ID del producto a actualizar: ");
    const p_nombre = await rl.question("Nuevo Nombre: ");
    const p_precio = await rl.question("Nuevo Precio: ");
    const p_stock = await rl.question("Nuevo Stock: ");
    const p_categoria = await rl.question("Nueva Categoría (1: Hogar, 2: Comida, 3: Electrónico, 4: Otro): ");
    const p_descuento = await rl.question("Descuento (0-100): ");
    const p_estado = await rl.question("Estado (1: Activo, 2: Inactivo): ");

    actualizarProducto(Number(p_id), p_nombre, Number(p_precio), Number(p_stock), Number(p_categoria), Number(p_estado), Number(p_descuento));
}   