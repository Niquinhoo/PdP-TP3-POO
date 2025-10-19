export type Operador = "+" | "-" | "*" | "/";

export function operar(a: number, b: number, op: Operador): number | null {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) {
                console.log("Error: división por cero");
                return null;
            }
            return a / b;
        default:
            console.log("Operador inválido");
            return null;
    }
}
