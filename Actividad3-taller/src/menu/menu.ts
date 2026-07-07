import { rl, clearConsole } from "../utils/readline";
import { menuCliente } from "./menucliente";
import { menuProducto } from "./menuproducto";

export function menu(){
    clearConsole();
    console.log("|--------SISTEMA DE GESTION----------|");
    console.log("1. Gestionar clientes");
    console.log("2. Gestionar productos");
    console.log("0. salir del programa")
    console.log("|------------------------------------|")
    
    rl.question("Selecciona una opción: ", (opcion) => {
        switch (opcion.trim()) {
            case "1":
                menuCliente(); 
                break;
            case "2":
                menuProducto();
                break;
            case "0":
                console.log("Saliendo...");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
                menu(); 
                break;
        }
    });
}
