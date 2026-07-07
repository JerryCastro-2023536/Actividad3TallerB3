import * as readline from "readline/promises";

export const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

export function clearConsole(): void {
    console.clear();
}

export function esperarTecla(callback: () => void): void {

}