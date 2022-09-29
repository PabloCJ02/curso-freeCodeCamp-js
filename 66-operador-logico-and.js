

// Comprobemos la tabla de verdad
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Ahora los operandos son expresiones

var a = 8;

// (a > 5) && (a < 10) --> true && true --> true
console.log(a > 5 && a < 10);

a = 3;

// (a < 5) && (a <= 10) --> false && true --> false
console.log(a < 5 && a <= 10);

a = 15;

// (a >= 5) && (a > 10) --> true && false --> false
console.log(a >= 5 && a > 10);

a = 1;

// (a == 5) && (a > 10) --> false && false --> false
console.log(a == 5 && a > 10);
