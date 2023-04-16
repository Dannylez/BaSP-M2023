console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para 
guardar el valor de la suma de ambos números en una 3er variable. */

console.log('-Exercise 1.a:');
let a=5;
let b=2;
let c=a+b;
console.log(c);

/* b. Crear dos variables de tipo String y concatenarlas guardando el 
resultado en una 3er variable. */

console.log('-Exercise 1.b');
let nombre='Daniel';
let apellido='Lezama';
let nombreCompleto=nombre+apellido;
console.log(nombreCompleto);

/* c. Crear dos variables de tipo String y sumar el largo de cada 
variable (cantidad de letras del string) guardando el resultado de 
la suma en una 3er variable (utilizar length). */

console.log('-Exercise 1.c:');
let animal='Perro';
let fruta='Manzana';
let suma=animal.length+fruta.length;
console.log(suma);