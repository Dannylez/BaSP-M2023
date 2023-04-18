console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne
el resultado. Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.a:');
function sum(n1,n2) {
    return n1+n2;
}
var resultadoA = sum(3,5);
console.log(resultadoA);

/* b. Copiar la función suma anterior y agregarle una validación para
controlar si alguno de los parámetros no es un número; de no ser un número,
mostrar un alert aclarando que uno de los parámetros tiene error y retornar
el valor NaN como resultado. */

console.log('-Exercise 6.b:');
function sum(n1,n2) {
    if (typeof(n1)=='number' && typeof(n2)=='number'){
        return n1+n2;
    }else {
        alert("One of the parameter it's not a number");
        return NaN;
    }
}
console.log(sum(2.8,"abc"));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y
devuelva verdadero si es un número entero. */

console.log('-Exercise 6.c:');
function validateInteger(number) {
    if (Math.round(number)===number){
        return true
    }else {
        return false
    }
}
console.log(validateInteger(3.4));
console.log(validateInteger(3));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada
a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que
haya decimales mostrar un alert con el error y retornar el número convertido a entero
(redondeado). */

console.log('-Exercise 6.d:');
function sumInteger(n1,n2) {
    if (typeof(n1)=='number' && typeof(n2)=='number'){
        if (validateInteger(n1) && validateInteger(n2)) {
            return n1+n2;
        }else {
            alert("One of the parameter it's not an integer");
            return Math.round(n1+n2);
        }
    }else {
        alert("One of the parameter it's not a number");
        return NaN;
    }
}
console.log(sumInteger(1.4,2));
console.log(sumInteger("abc",1.4));

/* e. Convertir la validación del ejercicio 6d) en una función separada y
llamarla dentro de una nueva función probando que todo siga funcionando igual
que en el apartado anterior. */

console.log('-Exercise 6.e:');
function validation(n1,n2) {
    if (typeof(n1)=='number' && typeof(n2)=='number'){
        if (validateInteger(n1) && validateInteger(n2)) {
            return 'ok';
        }else {
            alert("One of the parameter it's not an integer");
            return 'not ok';
        }
    }else {
        alert("One of the parameter it's not a number");
        return NaN;
    }
}
function sumWithValidation(n1,n2){
    var val = validation(n1,n2);
    if (val=='ok'){
        return n1+n2;
    }else if (val=='not ok') {
        return Math.round(n1+n2);
    }else {
        return NaN;
    }
}
console.log(sumWithValidation(1.4,2));
console.log(sumWithValidation("abc",1.4));