
// Comprobemos la tabla de verdad
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Ahora los operandos son expresiones

var a = 8;

// (a < 5) || (a > 15) --> false || false --> false
console.log(a < 5 || a > 15);

a = 2;

// (a < 5) || (a > 15) --> true || false --> true
console.log(a < 5 || a > 15);

a = 20;

// (a < 5) || (a > 15) --> false || true --> true
console.log(a < 5 || a > 15);

a = 5;

// (a < 5) || (a > 15) --> true || true --> true
console.log(a == 5 || a < 15);
