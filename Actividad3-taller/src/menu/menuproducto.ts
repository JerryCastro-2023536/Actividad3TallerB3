import { agregarProducto, listarProductos, actualizarProducto, eliminarProducto, buscarProducto, CalcularIVA } from "../service/productoservice";
import { rl, clearConsole, esperarTecla } from "../utils/readline";
import { menu } from "./menu";

export function menuProducto(): void {
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

    rl.question("Selecciona una opción de producto: ", (opcion) => {
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
                rl.question("Ingrese el ID para buscar: ", (id) => {
                    console.log(buscarProducto(Number(id)));
                    esperarTecla(() => menuProducto());
                });
                break;
            case "5":
                clearConsole();
                console.log("|---- Eliminar -----|");
                rl.question("Ingrese el ID para eliminar: ", (id) => {
                    eliminarProducto(Number(id));
                    esperarTecla(() => menuProducto());
                });
                break;
            case "6":
                clearConsole();
                console.log("|----- Total -----|");
                rl.question("Ingrese el ID del producto: ", (id) =>{
                    CalcularIVA(Number(id));
                    esperarTecla(() => menuProducto());
                });
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
    });
}

function agregarDatos(): void {
    console.log("|---- Registro de Producto ----|");

    rl.question("ID del producto: ", (p_id) => {
        rl.question("Nombre: ", (p_nombre) => {
            rl.question("Precio: ", (p_precio) => {
                rl.question("Stock: ", (p_stock) => {
                    rl.question("Categoría (1: Hogar, 2: Comida, 3: Electrónico, 4: Otro): ", (p_categoria) => {
                        rl.question("Descuento (0-100): ", (p_descuento) => {

                            const descuento = Number(p_descuento);
                            agregarProducto(Number(p_id), p_nombre, Number(p_precio), Number(p_stock), Number(p_categoria), descuento);
                            esperarTecla(() => menuProducto());
                        });
                    });
                });
            });
        });
    });
}

function actualizarDatos(): void {
    console.log("|---- Actualizar Producto ----|");

    rl.question("ID del producto a actualizar: ", (p_id) => {
        rl.question("Nuevo Nombre: ", (p_nombre) => {
            rl.question("Nuevo Precio: ", (p_precio) => {
                rl.question("Nuevo Stock: ", (p_stock) => {
                     rl.question("Nueva Categoría (1: Hogar, 2: Comida, 3: Electrónico, 4: Otro): ", (p_categoria) => {
                          rl.question("Descuento (0-100): ", (p_descuento) => {
                              rl.question("Estado (1: Activo, 2: Inactivo): ", (p_estado) => {
                                  const descuento = Number(p_descuento);
                                  const estado = Number(p_estado);
                                  actualizarProducto(Number(p_id), p_nombre, Number(p_precio), Number(p_stock), Number(p_categoria), estado, descuento);
                                  esperarTecla(() => menuProducto());
                              });
                          });
                      });
                });
            });
        });
    });
}
