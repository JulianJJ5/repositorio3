// let tareas = [];

//     const agregarTarea = () => {
//         const actividad = document.getElementById("actividad").value;
//         const fecha = document.getElementById("fecha").value;
//         const prioridad = document.getElementById("prioridad").checked ? "Alta" : "Baja";

//         if (actividad && fecha) {
//             tareas.push({ actividad, fecha, prioridad });
//             actualizarTabla();
//         } else {
//             alert("Por favor, complete todos los campos.");
//         }
//     }

//     const actualizarTabla = () => {
//         const tablaContainer = document.getElementById("tablaContainer");
//         tablaContainer.innerHTML = "";

//         if (tareas.length === 0) return;

//         const tabla = document.createElement("table");
//         const encabezado = tabla.createTHead();
//         const fila = encabezado.insertRow();
//         const encabezados = ["Actividad", "Prioridad", "Fecha"];
        
//         encabezados.forEach(header => {
//             const th = document.createElement("th");
//             th.textContent = header;
//             fila.appendChild(th);
//         });

//         const cuerpo = tabla.createTBody();
//         tareas.forEach(tarea => {
//             const fila = cuerpo.insertRow();
//             fila.insertCell().textContent = tarea.actividad;
//             fila.insertCell().textContent = tarea.prioridad;
//             fila.insertCell().textContent = tarea.fecha;
//         });

//         tablaContainer.appendChild(tabla);
//     }

//         const ordenarTareas = () => {
//         tareas.sort((a, b) => {
//             if (a.prioridad === b.prioridad) {
//                 return 0;
//             } else if (a.prioridad === "Alta") {
//                 return -1;
//             } else {
//                 return 1;
//             }
//         });

        
 
//         actualizarTabla();
//     }


//     const limpiar = () => {
//         document.getElementById("actividad").value = "";
//         document.getElementById("fecha").value = "";
//         document.getElementById("prioridad").checked = false;
//     }



let tareas = [];
let indice = null;
let bd = true;

const agregarTarea = () => {
    if (bd) {
        let actividad = document.getElementById("actividad").value;
        let fecha = document.getElementById("fecha").value;
        let prioridad = document.getElementById("prioridad").checked ? "Alta" : "Baja";

        if (actividad && fecha) {
            let info = {
                actividad: actividad,
                fecha: fecha,
                prioridad: prioridad
            };
            tareas.push(info);

            document.getElementById("tablaContainer").textContent = "";
            pintar();

        } else {
            alert("Por favor, complete todos los campos.");
        }
    } else {
        tareas[indice].actividad = document.getElementById("actividad").value;
        tareas[indice].fecha = document.getElementById("fecha").value;
        tareas[indice].prioridad = document.getElementById("prioridad").checked ? "Alta" : "Baja";

        document.getElementById("tablaContainer").textContent = "";
        pintar();
        limpiar();
        bd = true;
    }
}

const pintar = () => {
    let tabla = document.getElementById("tablaContainer");

    let encabezado = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");

    let titulos = ["ACTIVIDAD", "FECHA", "PRIORIDAD", "OPCIONES"];

    titulos.forEach(titulo => {
        let celdaEncabezado = document.createElement("th");
        celdaEncabezado.textContent = titulo;
        filaEncabezado.appendChild(celdaEncabezado);
    });

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    tareas.forEach((tarea, index) => {
        let fila = document.createElement("tr");

        let valores = [tarea.actividad, tarea.fecha, tarea.prioridad];

        valores.forEach((valor, i) => {
            let celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        let celdaOpciones = document.createElement("td");
        let eliminar = document.createElement("button");
        eliminar.textContent = "💣";
        eliminar.addEventListener("click", () => {
            tareas.splice(index, 1);
            document.getElementById("tablaContainer").textContent = "";
            pintar();
        });

        let editar = document.createElement("button");
        editar.textContent = "🪄";
        editar.addEventListener("click", () => {
            bd = false;
            document.getElementById("actividad").value = tarea.actividad;
            document.getElementById("fecha").value = tarea.fecha;
            document.getElementById("prioridad").checked = tarea.prioridad === "Alta";
            indice = index;
        });

        celdaOpciones.appendChild(eliminar);
        celdaOpciones.appendChild(editar);
        fila.appendChild(celdaOpciones);

        tabla.appendChild(fila);
    });
}

const ordenarTareas = () => {
    tareas.sort((a, b) => {
        // Si a.prioridad es "Alta" y b.prioridad es "Baja", se coloca a antes que b
        if (a.prioridad === "Alta" && b.prioridad === "Baja") {
            return -1;
        }
        // Si a.prioridad es "Baja" y b.prioridad es "Alta", se coloca a después que b
        else if (a.prioridad === "Baja" && b.prioridad === "Alta") {
            return 1;
        }
        // En cualquier otro caso, se mantiene el orden relativo entre a y b
        else {
            return 0;
        }
    });

    // Limpiar la tabla y volver a pintar las tareas ordenadas
    document.getElementById("tablaContainer").textContent = "";
    pintar();
}


const limpiar = () => {
    document.getElementById("actividad").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("prioridad").checked = false;
}
