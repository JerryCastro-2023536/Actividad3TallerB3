import { clientes } from "../data/clientes.js";
import type { cliente } from "../models/cliente.js";
import { Tipo } from "../enum/tipo.js";

export function listarClientes() : cliente[] {
    return clientes;
}

export function buscarCliente(id: number) {
    return clientes.find(c => c.id === id);
}


export function agregarClientes(
    id: number, 
    nombre: string, 
    edad: number, 
    dpi: number, 
    correo: string, 
    telefono: number, 
    tipo: number,
    estado: number) {

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

    console.log("Se ha agregado correctamente");
}


export function actualizarCliente(id: number, nombre: string, edad: number, 
    dpi: number, correo: string, telefono: number, tipo: number, estado: number) {

    const indice = clientes.findIndex(u => u.id === id);

    if (indice !== -1) {
        let tc = Tipo.INICIAL;
        if (tipo == 2) tc = Tipo.FRECUENTE;
        if (tipo == 3) tc = Tipo.FIEL;

        const est = estado === 2 ? "inactivo" : "activo";
        
        const clienteEncontrado = clientes[indice];

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

export function eliminarCliente(id: number) {
    const indice = clientes.findIndex(u => u.id === id);

    if (indice !== -1) {
        clientes.splice(indice, 1);
        console.log("Elemento eliminado");
    } else {
        console.log("Elemento no encontrado");
    }
}

