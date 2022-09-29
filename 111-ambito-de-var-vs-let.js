/*

Tema: Ámbito de var vs. let.
*/

var miVariableGlobal = 4;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);

  var miVariableLocal = 8;
  console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);
console.log(miVariableLocal); // Error

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // No hay error si se usa var

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Error si se usa let

// Ejemplo con let

var mostrarColor = true;

if (mostrarColor) {
  let color = "verde";
  console.log("Mi color favorito es: " + color);
}

console.log(color); // Error

// Ejemplo con var

if (mostrarColor) {
  var color = "verde";
  console.log("Mi color favorito es " + color);
}

console.log(color); // No hay error
