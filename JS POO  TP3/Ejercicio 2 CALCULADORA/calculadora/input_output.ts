import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

export function pedirNumero(mensaje: string): number {
    const input = prompt(mensaje);
    const num = parseFloat(input);
    if (isNaN(num)) {
        console.log("Número inválido. Intenta de nuevo.");
        return pedirNumero(mensaje);
    }
    return num;
}

export function pedirOperador(): string {
    const op = prompt("Ingresa el operador (+, -, *, /): ");
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
        console.log("Operador inválido. Intenta de nuevo.");
        return pedirOperador();
    }
    return op;
}

export function pedirString(mensaje: string): string {
    return prompt(mensaje);
}
