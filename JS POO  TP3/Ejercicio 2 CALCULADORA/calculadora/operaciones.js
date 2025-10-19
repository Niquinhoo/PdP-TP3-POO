"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operar = operar;
function operar(a, b, op) {
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
//# sourceMappingURL=operaciones.js.map