"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(titulo, descripcion = "Sin descripción", vencimiento = "No asignada", dificultad = "facil", fechaCreacion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion || new Date().toISOString().split('T')[0];
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
        this.estado = "pendiente";
        this.fechaDeEdicion = "No editada";
    }
    mostrarDetalle() {
        console.log("Detalle de la tarea:");
        console.log("-----------------------------");
        console.log(`Título: ${this.titulo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha de creación: ${this.fechaCreacion}`);
        console.log(`Vencimiento: ${this.vencimiento}`);
        let dificultadMostrar = "";
        switch (this.dificultad) {
            case 'facil':
                dificultadMostrar = '⭐';
                break;
            case 'intermedia':
                dificultadMostrar = '⭐⭐';
                break;
            case 'dificil':
                dificultadMostrar = '⭐⭐⭐';
                break;
        }
        console.log(`Dificultad: ${dificultadMostrar}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Última edición: ${this.fechaDeEdicion}`);
        console.log("-----------------------------");
    }
    editar() {
        const prompt = require('prompt-sync')({ sigint: true });
        let salir = false;
        while (!salir) {
            console.log("--- Editar Tarea ---");
            console.log("[1] Editar título");
            console.log("[2] Editar descripción");
            console.log("[3] Editar estado");
            console.log("[4] Editar fecha de vencimiento");
            console.log("[0] Volver");
            const opcion = prompt("Elige qué parte quieres editar: ");
            switch (opcion) {
                case "1":
                    this.titulo = prompt("Nuevo título: ");
                    console.log(" Título actualizado.");
                    break;
                case "2":
                    this.descripcion = prompt("Nueva descripción: ");
                    console.log(" Descripción actualizada.");
                    break;
                case "3":
                    this.estado = prompt("Nuevo estado (pendiente, en curso, terminada, cancelada): ");
                    console.log(" Estado actualizado.");
                    break;
                case "4":
                    this.vencimiento = prompt("Nueva fecha de vencimiento (YYYY-MM-DD): ");
                    console.log(" Fecha de vencimiento actualizada.");
                    break;
                case "0":
                    this.fechaDeEdicion = new Date().toISOString().split('T')[0];
                    salir = true;
                    break;
                default:
                    console.log("️ Opción inválida");
            }
        }
    }
}
exports.Tarea = Tarea;
