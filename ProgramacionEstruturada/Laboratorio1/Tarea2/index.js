
// Función para ordenar ascendente
function ordenarAscendente(array) {
  return array.slice().sort((a, b) => a - b);
}

// Función para ordenar descendente
function ordenarDescendente(array) {
  return array.slice().sort((a, b) => b - a);
}

// Función principal
function main() {
  const numeros = [];
  const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

  for (let i = 0; i < cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
  }

  const opcion = prompt("¿Cómo quiere ordenar los números? (Asc/Desc/None)").toLowerCase();

  let resultado;

  if (opcion === "asc") {
    resultado = ordenarAscendente(numeros); 
  } else if (opcion === "desc") {
    resultado = ordenarDescendente(numeros);
  } else if (opcion === "none") {
    resultado = numeros;
  } else {
    console.log("Opción inválida");
    return;
  }

  console.log("Resultado:", resultado);
  console.log(ascDesNone([4, 3, 2, 1], "Asc"));   // ➞ [1, 2, 3, 4]
  console.log(ascDesNone([7, 8, 11, 66], "Des")); // ➞ [66, 11, 8, 7]
console.log(ascDesNone([1, 2, 3, 4], "None"));  // ➞ [1, 2, 3, 4]
}

// Llamar a la función principal
main();
