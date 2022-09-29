/*

Tema: Actualizar las propiedades de un objeto.
*/

var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

console.log(contenido);
mochila.contenido.push("lápiz");
console.log(contenido);

mochila.contenido = [];
console.log(mochila.contenido);
