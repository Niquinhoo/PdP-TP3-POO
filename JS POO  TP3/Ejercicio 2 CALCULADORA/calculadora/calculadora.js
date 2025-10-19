"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = Calculadora;
const operaciones_1 = require("./operaciones");
const input_output_1 = require("./input_output");
function Calculadora() {
    this.resultado = 0;
    this.iniciar = function () {
        const num1 = (0, input_output_1.pedirNumero)("Ingresa el primer número: ");
        const op = (0, input_output_1.pedirOperador)();
        const num2 = (0, input_output_1.pedirNumero)("Ingresa el segundo número: ");
        const res = (0, operaciones_1.operar)(num1, num2, op);
        if (res === null)
            return;
        this.resultado = res;
        this.ciclo();
    };
    this.ciclo = function () {
        console.log(`Resultado actual: ${this.resultado}`);
        const resp = (0, input_output_1.pedirString)("¿Quieres seguir operando con este resultado? (s/n): ");
        if (resp.toLowerCase() === "s") {
            const op = (0, input_output_1.pedirOperador)();
            const num = (0, input_output_1.pedirNumero)("Ingresa el siguiente número: ");
            const nuevo = (0, operaciones_1.operar)(this.resultado, num, op);
            if (nuevo === null)
                return;
            this.resultado = nuevo;
            this.ciclo();
        }
        else {
            console.log(`Resultado final: ${this.resultado}`);
        }
    };
}
//# sourceMappingURL=calculadora.js.map