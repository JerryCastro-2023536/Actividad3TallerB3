import type { cliente } from "../models/cliente.js";
import { Tipo } from "../enum/tipo.js";
import { readClientes } from "../utils/Read.js";
import { writeCliente } from "../utils/Write.js";

export async function listarClientes(): Promise<cliente[]> {
    return await readClientes();
}

export async function buscarCliente(id: number): Promise<cliente | undefined> {
    const clienteBuscar: cliente[] = await readClientes();
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
    estado: number,
): Promise<string> {
    const clientes: cliente[] = await readClientes();

    if (clientes.some(c => c.id === id)) {
        return "Ya existe un cliente con ese ID.";
    }

    let tc = Tipo.INICIAL;
    if (tipo === 2) tc = Tipo.FRECUENTE;
    if (tipo === 3) tc = Tipo.FIEL;

    const est = estado === 2 ? "inactivo" : "activo";

    clientes.push({
        id,
        nombre,
        edad,
        dpi,
        correo,
        telefono,
        estado: est,
        tipo_cliente: tc,
    });

    await writeCliente(clientes);
    return "Se ha agregado correctamente";
}

export async function actualizarCliente(
    id: number,
    nombre: string,
    edad: number,
    dpi: number,
    correo: string,
    telefono: number,
    tipo: number,
    estado: number,
): Promise<string> {
    const clienteActualizar: cliente[] = await readClientes();
    const indice = clienteActualizar.findIndex(u => u.id === id);

    if (indice !== -1) {
        let tc = Tipo.INICIAL;
        if (tipo === 2) tc = Tipo.FRECUENTE;
        if (tipo === 3) tc = Tipo.FIEL;

        const est = estado === 2 ? "inactivo" : "activo";
        const clienteEncontrado = clienteActualizar[indice];

        clienteEncontrado.nombre = nombre;
        clienteEncontrado.edad = edad;
        clienteEncontrado.dpi = dpi;
        clienteEncontrado.correo = correo;
        clienteEncontrado.telefono = telefono;
        clienteEncontrado.tipo_cliente = tc;
        clienteEncontrado.estado = est;

        await writeCliente(clienteActualizar);
        return "Se ha actualizado correctamente";
    }

    return "El registro no existe para actualizar";
}

export async function eliminarCliente(id: number): Promise<string> {
    const clienteEliminar: cliente[] = await readClientes();
    const indice = clienteEliminar.findIndex(u => u.id === id);

    if (indice !== -1) {
        clienteEliminar.splice(indice, 1);
        await writeCliente(clienteEliminar);
        return "Elemento eliminado";
    }

    return "Elemento no encontrado";
}

