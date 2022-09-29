/*

Tema: Valores por defecto para los parámetros.
*/

const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5)); // Valor por defecto
console.log(incrementar(5, 3)); // Valor personalizado
