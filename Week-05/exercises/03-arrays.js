console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
(utilizar console.log). */

console.log('-Exercise 3.a:');
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4] + ' y ' + meses[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola 
(utilizar sort).*/

console.log('-Exercise 3.b:');
meses.sort();
console.log(meses);

/* c. Agregar un elemento al principio y al final del array 
(utilizar unshift y push). */

console.log('-Exercise 3.c:');
meses.unshift("Manzana");
meses.push("114");
console.log(meses);

/* d. Quitar un elemento del principio y del final del array 
(utilizar shift y pop). */

console.log('-Exercise 3.d:');
meses.shift();
meses.pop();
console.log(meses);

// e. Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e:');
meses.reverse();
console.log(meses);

/* f. Unir todos los elementos del array en un único string donde cada
mes este separado por un guión - (utilizar join). */

console.log('-Exercise 3.f:');
console.log(meses.join('-'));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta
Noviembre (utilizar slice). */

console.log('-Exercise 3.g:');
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses = meses.slice(4,11);
console.log(meses);