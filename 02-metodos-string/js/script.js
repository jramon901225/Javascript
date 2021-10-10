// Ejercicios

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/


/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

/*-------------------Ejercicio1--------------------*/
// Solicitar Nombres
// Solicitar Apellidos
// Regresar nombre minusculas y apellidos mayusculas

const nombre = prompt('Ingrese su nombre');
const nuevoNombre = nombre.toLowerCase();

const lastName = prompt('Ingrese su Apellido');
const newLastName = lastName.toUpperCase();

console.log (`${nuevoNombre} ${newLastName}`);


/*-------------------Ejercicio2--------------------*/


let nombre = window.prompt("Ingrese su nombre").toLowerCase();    
console.log (nombre);

/*-------------------Ejercicio 3---------------------------*/

const nombre = window.prompt("Ingrese su nombre completo")
const result = nombre.match(/[aeiou]/gi).length;
console.log (result);

/*-------------------Ejercicio 4---------------------------*/

let frase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';
const regex = /(estudiante)/gi;
let numFrase = frase.match(regex).length;
frase = frase.replace(/estudiante/g,"Koder");
console.log (numFrase)
console.log(frase)

/*-------------------Ejercicio 5---------------------------*/

const word1 = prompt('Ingrese una palabra');
const word2 = prompt('Ingrese otra palabra');


function word () {
    if (word1.length > word2.length){
        console.log(word1)
    } else if (word1.length < word2.length) {
        console.log(word2)
    }else {
        console.log('Las palabras ingresadas son iguales')
    }
}
word()

                           