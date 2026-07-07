import { agregarClientes, listarClientes, actualizarCliente, eliminarCliente, buscarCliente } from "../service/clienteservice";
import { rl, clearConsole, esperarTecla } from "../utils/readline";
import { menu } from "./menu";

export function menuCliente(): void {
    clearConsole();
    console.log("|-------- GESTIÓN DE CLIENTES ----------|");
    console.log("1. Listar Clientes");
    console.log("2. Agregar Cliente");
    console.log("3. Actualizar Cliente");
    console.log("4. Buscar Cliente");
    console.log("5. Eliminar Cliente");
    console.log("0. Volver al Menú Principal");
    console.log("|---------------------------------------|");

    rl.question("Selecciona una opción de cliente: ", (opcion) => {
        switch (opcion.trim()) {
            case "1":
                clearConsole();
                console.log("|-------- LISTA DE CLIENTES ----------|");
                console.log(listarClientes());
                esperarTecla(() => menuCliente());
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
                rl.question("Ingrese el ID para buscar: ", (id) => {
                    console.log(buscarCliente(Number(id)));
                    esperarTecla(() => menuCliente());
                });
                break;
            case "5":
                clearConsole();
                console.log("|---- Eliminar -----|");
                rl.question("Ingrese el ID para eliminar: ", (id) => {
                    eliminarCliente(Number(id));
                    esperarTecla(() => menuCliente());
                });
                break;
            case "0":
                console.log("Regresando al menú...");
                menu();
                break;
            default:
                console.log("Opción no válida.");
                esperarTecla(() => menuCliente());
                break;
        }
    });
}

function agregarDatos(): void {
    console.log("|---- Registro ----|");

    rl.question("ID del cliente: ", (p_id) => {
        rl.question("Nombre: ", (p_nombre) => {
            rl.question("Edad: ", (p_edad) => {
                rl.question("DPI: ", (p_dpi) => {
                    rl.question("Correo: ", (p_correo) => {
                        rl.question("Telefono: ", (p_telefono) => {
                            rl.question("Tipo (1: Inicial, 2: Frecuente, 3: Fiel): ", (p_tipo) => {
                                rl.question("Estado (1: Activo, 2: Inactivo): ", (p_estado) => {

                                    const id = Number(p_id);
                                    const edad = Number(p_edad);
                                    const dpi = Number(p_dpi);
                                    const telefono = Number(p_telefono);
                                    const tipo = Number(p_tipo);
                                    const estado = Number(p_estado);

                                    agregarClientes(id, p_nombre, edad, dpi, p_correo, telefono, tipo, estado);
                                    esperarTecla(() => menuCliente());
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function actualizarDatos(): void {
    console.log("|---- Actualizar ----|");

    rl.question("ID del cliente a actualizar: ", (p_id) => {
        rl.question("Nombre: ", (p_nombre) => {
            rl.question("Edad: ", (p_edad) => {
                rl.question("DPI: ", (p_dpi) => {
                    rl.question("Correo: ", (p_correo) => {
                        rl.question("Telefono: ", (p_telefono) => {
                            rl.question("Tipo (1: Inicial, 2: Frecuente, 3: Fiel): ", (p_tipo) => {
                                rl.question("Estado (1: Activo, 2: Inactivo): ", (p_estado) => {

                                    const id = Number(p_id);
                                    const edad = Number(p_edad);
                                    const dpi = Number(p_dpi);
                                    const telefono = Number(p_telefono);
                                    const tipo = Number(p_tipo);
                                    const estado = Number(p_estado);

                                    actualizarCliente(id, p_nombre, edad, dpi, p_correo, telefono, tipo, estado);
                                    esperarTecla(() => menuCliente());
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
