import { operar, Operador } from "./operaciones.js";
import { pedirNumero, pedirOperador, pedirString } from "./input_output.js";

export function Calculadora(this: any) {
    this.resultado = 0;

    this.iniciar = function () {
        const num1 = pedirNumero("Ingresa el primer número: ");
        const op = pedirOperador() as Operador;
        const num2 = pedirNumero("Ingresa el segundo número: ");

        const res = operar(num1, num2, op);
        if (res === null) return;

        this.resultado = res;
        this.ciclo();
    };

    this.ciclo = function () {
        console.log(`Resultado actual: ${this.resultado}`);
        const resp = pedirString("¿Quieres seguir operando con este resultado? (s/n): ");
        if (resp.toLowerCase() === "s") {
            const op = pedirOperador() as Operador;
            const num = pedirNumero("Ingresa el siguiente número: ");
            const nuevo = operar(this.resultado, num, op);
            if (nuevo === null) return;
            this.resultado = nuevo;
            this.ciclo();
        } else {
            console.log(`Resultado final: ${this.resultado}`);
        }
    };
}
