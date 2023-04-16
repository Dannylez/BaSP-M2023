console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('-Exercise 2.a:');
var wordA = 'Australopithecus';
wordA = wordA.toUpperCase();
console.log(wordA);

/* b. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.b:');
var wordB = 'Electroencefalografista';
var wordy = wordB.substring(0,5);
console.log(wordy);

/* c. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los últimos 3 caracteres guardando el
resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.c:');
var wordC = 'Esternocleidomastoideo';
var lastThree = wordC.substring(wordC.length-3);
console.log(lastThree);

/* d. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con la primera varra en mayúscula y las demás
en minúscula. Guardar el resultado en una nueva variable (utilizar
substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.d:');
var wordD = 'Anticonstitucionalidad';
var firstCap = wordD.substring(0,1).toUpperCase() + wordD.substring(1).toLowerCase();
console.log(firstCap);

/* e. Crear una variable de tipo string con al menos 10 caracteres y
algún espacio en blanco. Encontrar la posición del primer espacio en
blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.e:');
var moreWords = 'Mi mamá me mima';
var firstBlank = moreWords.indexOf(' ');
console.log(firstBlank);

/* f. Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera varra de ambas palabras en mayúscula y las demás varras en
minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */

console.log('-Exercise 2.f:');
var twoWords = 'Ácido desoxirribonucleico';
var blankSpace = twoWords.indexOf(' ');
var twoWordsCap = twoWords.substring(0,1).toUpperCase() + twoWords.substring(1,blankSpace+1).toLowerCase() + 
twoWords.substring(blankSpace+1,blankSpace+2).toUpperCase() + twoWords.substring(blankSpace+2).toLowerCase();
console.log(twoWordsCap);