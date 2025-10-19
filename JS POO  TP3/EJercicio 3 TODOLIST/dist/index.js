"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gestorTareas_1 = require("./gestorTarea/gestorTareas");
const prompt = require('prompt-sync')({ sigint: true });
function main() {
    const gestor = new gestorTareas_1.GestorTareas();
    while (true) {
        console.log("---  Gestor de Tareas ---");
        console.log("[1] Crear tarea");
        console.log("[2] Mostrar tareas");
        console.log("[3] Buscar por estado");
        console.log("[4] Buscar por dificultad");
        console.log("[5] Buscar por título");
        console.log("[0] Salir");
        const opcion = prompt("Seleccione una opción: ");
        switch (opcion) {
            case "1":
                gestor.crearTarea();
                break;
            case "2":
                gestor.mostrarTareas();
                break;
            case "3":
                console.log("Estados disponibles: pendiente / en curso / terminada / cancelada");
                const estadoInput = prompt("Ingrese el estado: ");
                if (estadoInput === 'pendiente' || estadoInput === 'en curso' || estadoInput === 'terminada' || estadoInput === 'cancelada') {
                    gestor.buscarPorEstado(estadoInput);
                }
                else {
                    console.log("️ Estado inválido");
                }
                break;
            case "4":
                console.log("Dificultades disponibles: facil / intermedia / dificil");
                const dificultadInput = prompt("Ingrese la dificultad: ");
                if (dificultadInput === 'facil' || dificultadInput === 'intermedia' || dificultadInput === 'dificil') {
                    gestor.buscarPorDificultad(dificultadInput);
                }
                else {
                    console.log("️ Dificultad inválida");
                }
                break;
            case "5":
                const tituloBuscar = prompt("Ingrese parte del título a buscar: ");
                if (tituloBuscar && tituloBuscar.trim() !== "") {
                    gestor.buscarPorTitulo(tituloBuscar);
                }
                else {
                    console.log("️ Debe ingresar un título válido");
                }
                break;
            case "0":
                console.log(" Adios!");
                return;
            default:
                console.log("️ Opción no válida");
        }
    }
}
main();
