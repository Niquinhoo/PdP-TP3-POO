import { Tarea, Dificultad, Estado } from '../gestorTarea/tarea';
const prompt = require('prompt-sync')({ sigint: true });

export class GestorTareas {
    lista: Tarea[];

    constructor() {
        this.lista = [];
    }

    crearTarea() {
        let continuar: string;
        do {
            const titulo: string = prompt("Ingrese el título de la tarea: ");
            if (!titulo || titulo.trim() === "") {
                console.log("️El título no puede estar vacío.");
                return;
            }

            let descripcion: string = prompt("Ingrese la descripción (opcional): ");
            if (!descripcion || descripcion.trim() === "") descripcion = "Sin descripción";

            let vencimiento: string = prompt("Ingrese la fecha de vencimiento (YYYY-MM-DD) (opcional): ");
            if (!vencimiento || vencimiento.trim() === "") vencimiento = "No asignada";

            let dificultadInput: string = prompt("Ingrese la dificultad (1 Fácil ⭐ - 2 Media ⭐⭐ - 3 Alta ⭐⭐⭐): ");
            let dificultad: Dificultad;
            switch (dificultadInput) {
                case "1": dificultad = "facil"; break;
                case "2": dificultad = "intermedia"; break;
                case "3": dificultad = "dificil"; break;
                default: dificultad = "facil";
            }

            const tarea = new Tarea(titulo, descripcion, vencimiento, dificultad);
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
        if (opcion === "0") return;

        const index = parseInt(opcion) - 1;
        if (index < 0 || index >= this.lista.length) {
            console.log("️ Opción inválida.");
            return;
        }

        const tarea = this.lista[index];
        tarea.mostrarDetalle();

        const accion = prompt("[1] Editar tarea | [0] Volver: ");
        if (accion === "1") tarea.editar();
    }

    buscarPorEstado(estado: Estado) {
        const resultado: Tarea[] = [];
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].estado === estado) {
                resultado.push(this.lista[i]);
            }
        }
        this.mostrarResultados(resultado, `Estado: ${estado}`);
    }

    buscarPorDificultad(dificultad: Dificultad) {
        const resultado: Tarea[] = [];
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].dificultad === dificultad) {
                resultado.push(this.lista[i]);
            }
        }
        this.mostrarResultados(resultado, `Dificultad: ${dificultad}`);
    }

    buscarPorTitulo(titulo: string) {
        const resultado: Tarea[] = [];
        const tituloLower = titulo.toLowerCase();

        for (let i = 0; i < this.lista.length; i++) {
            const tareaTituloLower = this.lista[i].titulo.toLowerCase();
            
            if (tareaTituloLower.indexOf(tituloLower) !== -1) {
                resultado.push(this.lista[i]);
            }
        }

        this.mostrarResultados(resultado, `Título contiene "${titulo}"`);
    }


    private mostrarResultados(tareas: Tarea[], criterio: string) {
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