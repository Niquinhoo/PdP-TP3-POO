"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
const tarea_1 = require("../gestorTarea/tarea");
const prompt = require('prompt-sync')({ sigint: true });
class GestorTareas {
    constructor() {
        this.lista = [];
    }
    crearTarea() {
        let continuar;
        do {
            const titulo = prompt("Ingrese el título de la tarea: ");
            if (!titulo || titulo.trim() === "") {
                console.log("️El título no puede estar vacío.");
                return;
            }
            let descripcion = prompt("Ingrese la descripción (opcional): ");
            if (!descripcion || descripcion.trim() === "")
                descripcion = "Sin descripción";
            let vencimiento = prompt("Ingrese la fecha de vencimiento (YYYY-MM-DD) (opcional): ");
            if (!vencimiento || vencimiento.trim() === "")
                vencimiento = "No asignada";
            let dificultadInput = prompt("Ingrese la dificultad (1 Fácil ⭐ - 2 Media ⭐⭐ - 3 Alta ⭐⭐⭐): ");
            let dificultad;
            switch (dificultadInput) {
                case "1":
                    dificultad = "facil";
                    break;
                case "2":
                    dificultad = "intermedia";
                    break;
                case "3":
                    dificultad = "dificil";
                    break;
                default: dificultad = "facil";
            }
            const tarea = new tarea_1.Tarea(titulo, descripcion, vencimiento, dificultad);
            this.lista.push(tarea);
            continuar = prompt("¿Desea crear otra tarea? [1] SI [2] NO: ");
        } while (continuar === "1");
    }
    mostrarTareas() {
        if (this.lista.length === 0) {
            console.log(" No hay tareas cargadas.");
            return;
        }
        console.log("Lista de tareas:");
        for (let i = 0; i < this.lista.length; i++) {
            console.log(`[${i + 1}] ${this.lista[i].titulo}`);
        }
        const opcion = prompt("Ingrese el número de la tarea para ver detalles (0 para regresar): ");
        if (opcion === "0")
            return;
        const index = parseInt(opcion) - 1;
        if (index < 0 || index >= this.lista.length) {
            console.log("️ Opción inválida.");
            return;
        }
        const tarea = this.lista[index];
        tarea.mostrarDetalle();
        const accion = prompt("[1] Editar tarea | [0] Volver: ");
        if (accion === "1")
            tarea.editar();
    }
    buscarPorEstado(estado) {
        const resultado = [];
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].estado === estado) {
                resultado.push(this.lista[i]);
            }
        }
        this.mostrarResultados(resultado, `Estado: ${estado}`);
    }
    buscarPorDificultad(dificultad) {
        const resultado = [];
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].dificultad === dificultad) {
                resultado.push(this.lista[i]);
            }
        }
        this.mostrarResultados(resultado, `Dificultad: ${dificultad}`);
    }
    buscarPorTitulo(titulo) {
        const resultado = [];
        const tituloLower = titulo.toLowerCase();
        for (let i = 0; i < this.lista.length; i++) {
            const tareaTituloLower = this.lista[i].titulo.toLowerCase();
            // Reemplazamos includes con indexOf
            if (tareaTituloLower.indexOf(tituloLower) !== -1) {
                resultado.push(this.lista[i]);
            }
        }
        this.mostrarResultados(resultado, `Título contiene "${titulo}"`);
    }
    mostrarResultados(tareas, criterio) {
        if (tareas.length === 0) {
            console.log(` No hay tareas para el criterio: ${criterio}.`);
            return;
        }
        console.log(`Resultados (${criterio}):`);
        tareas.forEach((t, i) => {
            console.log(`#${i + 1}`);
            console.log(`Título: ${t.titulo}`);
            console.log(`Descripción: ${t.descripcion}`);
            console.log(`Vencimiento: ${t.vencimiento}`);
            console.log(`Dificultad: ${t.dificultad}`);
            console.log(`Estado: ${t.estado}`);
            console.log(`Creada el: ${t.fechaCreacion}`);
            console.log(`Última edición: ${t.fechaDeEdicion}`);
            console.log("-------------------------");
        });
    }
}
exports.GestorTareas = GestorTareas;
