/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

 const numero = prompt('ingrese un numero entre 1 y 10')
function tabla (){
    if(numero > 1 && numero < 10){
        for (let i = 1 ; i <= 10 ; i++) {
            const result = numero * i;
            console.log(`${numero} X ${i} = ${result}`)
        }
    } else {
        console.log('el numero ingresado no es valido')
    }  
}
tabla()

/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

const number = prompt('Ingrese un numero entre 1 y 100')
function parNumber(){
    if(number > 10 && number < 100){
        for (let i =10; i <= number ; i++){
            if (i % 2 === 0){
                console.log (i)
            }
        }
    }
}
parNumber()

/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

const cadenanumber = (prompt ('Ingrese una cantiad'))
 let result = 0
function suma(){
    const separador = cadenanumber.split("");
    result = 0
    for (let i = 0; i < separador.length ; i++){
         result += parseInt(separador[i]);
    }
    return result
}
suma()
console.log(result)



// Ejercicio 4:
// Imprimir en consola el siguiente patrón
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********


let entrada =('')
function patron () {
  for (let i = 0; i <10; i++) {
   entrada += '*'
  console.log(entrada)
}
}
patron()