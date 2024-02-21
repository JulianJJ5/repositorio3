// let tareas = []
// let indice = null

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

//         document.getElementById("tabla-container").textContent = ""
//         pintar()
//     }

//     pintar = () => {

//         tareas.forEach((tareas, index) => {
//             let fila = document.createElement("tr")
//             let celda = document.createElement("td")
    
//             celda.textContent = tareas.actividad
//             fila.appendChild(celda)
    
//             celda = document.createElement("td")
//             celda.textContent = tareas.fecha
//             fila.appendChild(celda)

//             celda = document.createElement("td")
//             celda.textContent = tareas.prioridad
//             fila.appendChild(celda)

//             celda = document.createElement("td")
//         let eliminar = document.createElement("button")
//         eliminar.textContent = "💣"
//         eliminar.addEventListener("click", () => {
//             datos.splice(index, 1); // Eliminar el elemento en la posición 'index' del array 'datos'
//             document.getElementById("tabla-container").textContent = ""; // Limpiar el contenido de la tabla
//             pintar(); // Volver a pintar la tabla sin el elemento eliminado
//         })

//         let editar = document.createElement("button")
//         editar.textContent = "🪄"
//         editar.addEventListener("click", () => {
//             console.log(info);
//             bd = false
//             document.getElementById("nombre").value = tareas.actividad
//             document.getElementById("apellido").value = tareas.fecha
//             document.getElementById("telefono").value = tareas.prioridad
            
//             indice = index
//         })

//         celda.appendChild(eliminar)
//         celda.appendChild(editar)
//         fila.appendChild(celda)

//         document.getElementById("tabla-container").appendChild(fila)
        
//         })}

//         const ordenarTareas = () => {
//             tareas.sort((a, b) => {
//                 if (a.prioridad === b.prioridad) {
//                     return 0;
//                 } else if (a.prioridad === "Alta") {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             });
    
            
     
//             agregarTarea();
//         }
        
//         const limpiar = () => {
//             document.getElementById("actividad").value = "";
//             document.getElementById("fecha").value = "";
//             document.getElementById("prioridad").checked = false;
//         }