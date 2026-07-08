import { rl, clearConsole, esperarTecla } from "../utils/readline";
import { menuCliente } from "./menucliente";
import { menuProducto } from "./menuproducto";

export async function menu(){
    while (true) {
        clearConsole();
        console.log("|--------SISTEMA DE GESTION----------|");
        console.log("1. Gestionar clientes");
        console.log("2. Gestionar productos");
        console.log("0. salir del programa")
        console.log("|------------------------------------|")
        
        let opcion = await rl.question("Ingrese una opcion: ")
        switch (opcion.trim()) {
            case "1":
                await menuCliente();
                break;
            case "2":
               await menuProducto();
                break;
            case "0":
                console.log("Saliendo...");
                rl.close();
                return;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
                await esperarTecla();
                break;
        }
    }
}
