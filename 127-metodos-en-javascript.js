

// Versión ES5

// const persona = {
//   nombre: "Isabel",
//   presentarse: function () {
//     return `¡Hola! Mi nombre es ${this.nombre}.`;
//   },
// };

// console.log(persona.presentarse());

// Versión ES6

const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  },
};

persona.presentarse();
