import { agregarClientes, listarClientes, actualizarCliente, eliminarCliente, buscarCliente } from "../service/clienteservice";
import { rl, clearConsole, esperarTecla } from "../utils/readline";
import { menu } from "./menu";

export async function menuCliente() {
    while (true) {
        clearConsole();
        console.log("|-------- GESTIÓN DE CLIENTES ----------|");
        console.log("1. Listar Clientes");
        console.log("2. Agregar Cliente");
        console.log("3. Actualizar Cliente");
        console.log("4. Buscar Cliente");
        console.log("5. Eliminar Cliente");
        console.log("0. Volver al Menú Principal");
        console.log("|---------------------------------------|");

        let opcion = await rl.question("Selecciona una opcion: ");
        switch (opcion.trim()) {
            case "1":
                clearConsole();
                console.log("|-------- LISTA DE CLIENTES ----------|");
                console.log(await listarClientes());
                await esperarTecla();
                break;
            case "2":
                clearConsole();
                await agregarDatos();
                await esperarTecla();
                break;
            case "3":
                clearConsole();
                await actualizarDatos();
                await esperarTecla();
                break;
            case "4":
                clearConsole();
                console.log("|---- Buscar -----|");
                const idBuscar = await rl.question("Ingrese el ID para buscar: ");
                console.log(await buscarCliente(Number(idBuscar)));
                await esperarTecla();
                break;
            case "5":
                clearConsole();
                console.log("|---- Eliminar -----|");
                const idEliminar = await rl.question("Ingrese el ID para eliminar: ");
                console.log(await eliminarCliente(Number(idEliminar)));
                await esperarTecla();
                break;
            case "0":
                return;
            default:
                console.log("Opción no válida.");
                await esperarTecla();
                break;
        }
    }
}

async function agregarDatos() {
    console.log("|---- Registro ----|");

    const id = await rl.question("ID del cliente: ");
    const p_nombre = await rl.question("Nombre: ");
    const p_edad = await rl.question("Edad: ");
    const p_dpi = await rl.question("DPI: ");
    const p_correo = await rl.question("Correo: ");
    const p_telefono = await rl.question("Telefono: ");
    const p_tipo = await rl.question(
        "Tipo (1: Inicial, 2: Frecuente, 3: Fiel): ",
    );
    const p_estado = await rl.question("Estado (1: Activo, 2: Inactivo): ");

    agregarClientes(
        Number(id),
        p_nombre,
        Number(p_edad),
        Number(p_dpi),
        p_correo,
        Number(p_telefono),
        Number(p_tipo),
        Number(p_estado),
    );
}

async function actualizarDatos() {
    console.log("|---- Actualizar ----|");

    const id = await rl.question("ID del cliente: ");
    const p_nombre = await rl.question("Nombre: ");
    const p_edad = await rl.question("Edad: ");
    const p_dpi = await rl.question("DPI: ");
    const p_correo = await rl.question("Correo: ");
    const p_telefono = await rl.question("Telefono: ");
    const p_tipo = await rl.question(
        "Tipo (1: Inicial, 2: Frecuente, 3: Fiel): ",
    );
    const p_estado = await rl.question("Estado (1: Activo, 2: Inactivo): ");

    actualizarCliente(
        Number(id),
        p_nombre,
        Number(p_edad),
        Number(p_dpi),
        p_correo,
        Number(p_telefono),
        Number(p_tipo),
        Number(p_estado),
    );
}
