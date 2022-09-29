/*

Tema: La palabra reservada const.
*/

const MI_CONSTANTE = 35;

console.log(MI_CONSTANTE);

// Error
// MI_CONSTANTE = 15;

function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
    return undefined;
  }

  return PI * radio ** 2;
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));
