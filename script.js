// Array de objetos para almacenar las tareas
const tareas = [];

// Referencias al DOM
const formulario = document.getElementById("formulario");
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");
const error = document.getElementById("error");

// Evento del formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = tareaInput.value.trim();

    // Validación
    if (texto === "") {
        error.textContent = "Debes escribir una tarea.";
        return;
    }

    error.textContent = "";

    // Crear objeto tarea
    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false
    };

    // Guardar en el array
    tareas.push(nuevaTarea);

    // Renderizar
    renderizarTareas();

    // Limpiar input
    tareaInput.value = "";
});

// Función para mostrar tareas
function renderizarTareas() {
    listaTareas.innerHTML = "";

    tareas.forEach((tarea) => {
        const li = document.createElement("li");

        li.textContent = tarea.texto;

        if (tarea.completada) {
            li.classList.add("completada");
        }

        // Marcar como completada
        li.addEventListener("click", () => {
            tarea.completada = !tarea.completada;
            li.classList.toggle("completada");
        });

        listaTareas.appendChild(li);
    });
}