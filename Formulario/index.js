datos = []
let indice = null
let bd = true

const agregarDatos = () => {
    if (bd == true) {
        let genero = ""
        if (document.getElementById("genero").checked) {
            genero = "Masculino"
        } else {
            genero = "Femenino"
        }

        let info = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            telefono: document.getElementById("telefono").value,
            tipodoc: document.getElementById("list").value,
            documento: document.getElementById("documento").value,
            correo: document.getElementById("correo").value,
            fecha: document.getElementById("fecha").value,
            genero: genero
        }
        datos.push(info)

        document.getElementById("tabla-container").textContent = ""
        pintar()

    } else {
        datos[indice].nombre = document.getElementById("nombre").value
        datos[indice].apellido = document.getElementById("apellido").value
        datos[indice].telefono = document.getElementById("telefono").value
        datos[indice].tipodoc = document.getElementById("list").value
        datos[indice].documento = document.getElementById("documento").value
        datos[indice].correo = document.getElementById("correo").value
        datos[indice].fecha = document.getElementById("fecha").value
        datos[indice].genero = document.getElementById("Masculino").value
        datos[indice].genero = document.getElementById("Femenino").value


        document.getElementById("tabla-container").textContent = ""
        pintar()
        limpiar()
        bd = true
    }
}

pintar = () => {

    datos.forEach((info, index) => {
        let fila = document.createElement("tr")
        let celda = document.createElement("td")

        celda.textContent = info.nombre
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.apellido
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.genero
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.telefono
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.fecha
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.documento
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.tipodoc
        fila.appendChild(celda)

        celda = document.createElement("td")
        celda.textContent = info.correo
        fila.appendChild(celda)

        celda = document.createElement("td")
        let eliminar = document.createElement("button")
        eliminar.textContent = "💣"
        eliminar.addEventListener("click", () => {
            datos.splice(index, 1); // Eliminar el elemento en la posición 'index' del array 'datos'
            document.getElementById("tabla-container").textContent = ""; // Limpiar el contenido de la tabla
            pintar(); // Volver a pintar la tabla sin el elemento eliminado
        })

        let editar = document.createElement("button")
        editar.textContent = "🪄"
        editar.addEventListener("click", () => {
            console.log(info);
            bd = false
            document.getElementById("nombre").value = info.nombre
            document.getElementById("apellido").value = info.apellido
            document.getElementById("telefono").value = info.telefono
            document.getElementById("list").value = info.tipodoc
            document.getElementById("documento").value = info.documento
            document.getElementById("correo").value = info.correo
            document.getElementById("fecha").value = info.fecha

            indice = index
        })
        celda.appendChild(eliminar)
        celda.appendChild(editar)
        fila.appendChild(celda)

        document.getElementById("tabla-container").appendChild(fila)
    })}


const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("list").value = "";
    document.getElementById("documento").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("Masculino").checked = false;
    document.getElementById("Femenino").checked = false;
}