let tareas = [];

    const agregarTarea = () => {
        const actividad = document.getElementById("actividad").value;
        const fecha = document.getElementById("fecha").value;
        const prioridad = document.getElementById("prioridad").checked ? "Alta" : "Baja";

        if (actividad && fecha) {
            tareas.push({ actividad, fecha, prioridad });
            actualizarTabla();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    }

    const actualizarTabla = () => {
        const tablaContainer = document.getElementById("tablaContainer");
        tablaContainer.innerHTML = "";

        if (tareas.length === 0) return;

        const tabla = document.createElement("table");
        const encabezado = tabla.createTHead();
        const fila = encabezado.insertRow();
        const encabezados = ["Actividad", "Prioridad", "Fecha"];
        
        encabezados.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            fila.appendChild(th);
        });

        const cuerpo = tabla.createTBody();
        tareas.forEach(tarea => {
            const fila = cuerpo.insertRow();
            fila.insertCell().textContent = tarea.actividad;
            fila.insertCell().textContent = tarea.prioridad;
            fila.insertCell().textContent = tarea.fecha;
        });

        tablaContainer.appendChild(tabla);
    }

        const ordenarTareas = () => {
        tareas.sort((a, b) => {
            if (a.prioridad === b.prioridad) {
                return 0;
            } else if (a.prioridad === "Alta") {
                return -1;
            } else {
                return 1;
            }
        });

        
 
        actualizarTabla();
    }
