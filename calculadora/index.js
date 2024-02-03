// const input = () => {
//     document.getElementById("input").value += 
//     parseInt(document.getElementsById("boton").value);
//   };
  
//   const limpiar = () => {
//     document.getElementById("input").value = "";
//   };
  
  
//    let sumar = () => {
//       document.getElementById("input").value += "+";
//     };
//    let restar = () => {
//       document.getElementById("input").value += "-";
//     };
//    let multiplicar = () => {
//       document.getElementById("input").value += "*";
//     }
//     let dividir = () => {
//       document.getElementById("input").value += "/";
//     }


function poner(value) {
  document.getElementById("txt").value += value;
}
function calcular(operator) {
  let result = document.getElementById("txt").value;
  let calculation = eval(result);
  document.getElementById("txt").value =calculation;
}
function borrar() {
  document.getElementById("txt").value = ""
}
  

 