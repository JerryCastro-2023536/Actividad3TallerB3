import * as readline from "readline/promises";

export const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

export function clearConsole(): void {
    console.clear();
}

export async function esperarTecla(): Promise<void> {
    await rl.question("Presione ENTER para continuar...");
}