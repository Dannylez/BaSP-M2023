console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para
guardar el valor de la suma de ambos números en una 3er variable. */

console.log('-Exercise 1.a:');
var a = 5;
var b = 2;
var c = a+b;
console.log(c);

/* b. Crear dos variables de tipo String y concatenarlas guardando el
resultado en una 3er variable. */

console.log('-Exercise 1.b');
var nombre = 'Daniel';
var apellido = 'Lezama';
var nombreCompleto = nombre+apellido;
console.log(nombreCompleto);

/* c. Crear dos variables de tipo String y sumar el largo de cada
variable (cantidad de varras del string) guardando el resultado de
la suma en una 3er variable (utilizar length). */

console.log('-Exercise 1.c:');
var animal = 'Perro';
var fruta = 'Manzana';
var suma = animal.length+fruta.length;
console.log(suma);