import type { cliente } from "../models/cliente.js";
import { Tipo } from "../enum/tipo.js";
import { readClientes } from "../utils/Read.js";
import { writeCliente } from "../utils/Write.js";

export async function listarClientes() : Promise<cliente[]> {
    const c : cliente[] = await readClientes(); 
    return c;
}

export async function buscarCliente(id: number) {
    const clienteBuscar : cliente[] = await readClientes();
    return clienteBuscar.find(c => c.id === id);
}


export async function agregarClientes(
    id: number, 
    nombre: string, 
    edad: number, 
    dpi: number, 
    correo: string, 
    telefono: number, 
    tipo: number,
    estado: number) {

    
    const clientes : cliente[] = await readClientes();
    
    if (clientes.some(c => c.id === id)) {
        console.log("Ya existe un cliente con ese ID.");
        return;
    }

    let tc = Tipo.INICIAL;
    if (tipo == 2) tc = Tipo.FRECUENTE;
    if (tipo == 3) tc = Tipo.FIEL;

    const est = estado === 2 ? "inactivo" : "activo";

    clientes.push({
        id: id,
        nombre: nombre,
        edad: edad,
        dpi: dpi,
        correo: correo,
        telefono: telefono,
        estado: est,
        tipo_cliente: tc
    });

    await writeCliente(clientes);

    console.log("Se ha agregado correctamente");
}


export async function actualizarCliente(id: number, nombre: string, edad: number, 
    dpi: number, correo: string, telefono: number, tipo: number, estado: number) {
    const clienteActualizar : cliente[] = await readClientes();
    const indice = clienteActualizar.findIndex(u => u.id === id);

    if (indice !== -1) {
        let tc = Tipo.INICIAL;
        if (tipo == 2) tc = Tipo.FRECUENTE;
        if (tipo == 3) tc = Tipo.FIEL;

        const est = estado === 2 ? "inactivo" : "activo";
        
        const clienteEncontrado = clienteActualizar[indice];

        clienteEncontrado!.nombre = nombre;
        clienteEncontrado!.edad = edad;
        clienteEncontrado!.dpi = dpi;
        clienteEncontrado!.correo = correo;
        clienteEncontrado!.telefono = telefono;
        clienteEncontrado!.tipo_cliente = tc;
        clienteEncontrado!.estado = est;

        console.log("Se ha actualizado correctamente");
    } else {
        console.log("El registro no existe para actualizar");
    }
}

export async function eliminarCliente(id: number) {
    const clienteEliminar : cliente[] = await readClientes();
    const indice = clienteEliminar.findIndex(u => u.id === id);

    if (indice !== -1) {
        clienteEliminar.splice(indice, 1);
        console.log("Elemento eliminado");
    } else {
        console.log("Elemento no encontrado");
    }
}

