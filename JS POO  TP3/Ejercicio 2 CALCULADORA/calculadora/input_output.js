"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirNumero = pedirNumero;
exports.pedirOperador = pedirOperador;
exports.pedirString = pedirString;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
function pedirNumero(mensaje) {
    const input = prompt(mensaje);
    const num = parseFloat(input);
    if (isNaN(num)) {
        console.log("Número inválido. Intenta de nuevo.");
        return pedirNumero(mensaje);
    }
    return num;
}
function pedirOperador() {
    const op = prompt("Ingresa el operador (+, -, *, /): ");
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
        console.log("Operador inválido. Intenta de nuevo.");
        return pedirOperador();
    }
    return op;
}
function pedirString(mensaje) {
    return prompt(mensaje);
}
//# sourceMappingURL=input_output.js.map