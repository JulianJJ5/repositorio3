let tarea = {}
let actividad = []

const add_tarea = () => {
    if(document.getElementById("priori").checked) {
        tarea.prioridad = "Alta"
    } else {
        tarea.prioridad = "Baja"
    }
    tarea.nombre = document.getElementById("nme").value,
    tarea.fec = document.getElementById("fecha").value
}
actividad.push(tarea)

const crear = () => {
    actividad.forEach((item, i) => {
    let th1 = document.createElement("th")
    th1.textContent = item.nombre
    let th2 = document.createElement("th")
    th2.textContent = item.prioridad
    let th3 = document.createElement("th")
    th3.textContent = item.fec
    document.getElementById("cam").appendChild(th1),
    document.getElementById("cam").appendChild(th2),
    document.getElementById("cam").appendChild(th3),
            document.getElementById("actividad") = "";
    
})}

console.log(tarea);