/*---------------------------Primer Ejercicio------------------------*/

let number = window.prompt("Digite un numero entre 1 y 100");

if (number > 1 && number < 100 ){
     if (number % 2 == 0) {
        console.log ("el numero ingresado es par " + number);
    }   else {
        console.log ("el numero ingresado es impar " + number);
    }

}
else{
    console.log("ingresa un numero valido");
}




/*---------------------------Segundo ejercicio------------------------*/

let num1 = window.prompt("digite primer numero");
let num2 = window.prompt("digite segundo numero");

if (num1 > num2) {
    console.log(`el numero mayor es ${num1}`);
    console.log(`el numero menor es ${num2}`);
    }
    else {
    console.log(`el numero mayor es ${num2}`);
    console.log(`el numero mmenor es ${num1}`);

    }


/*---------------------------Tercer Ejercicio------------------------*/

    let edad = window.prompt("Ingrese su edad");
    let peso = window.prompt("Ingrese su peso en KG");
    const gravedad = 9.81;

    function pesoLuna (){
        pesoLuna = (peso / gravedad)*1.622;
        return pesoLuna;
    }

    pesoLuna()

    console.log (`tu peso en la luna seria ${pesoLuna}`);

/*---------------------------Cuarto Ejercicio------------------------*/

let calificacion = window.prompt ("ingrese la calificacion de un examen (0-100)");

if (calificacion >= 90) {
    console.log("A")
}
else if(calificacion >= 80){
    console.log("B")
}
else if (calificacion >=70){
    console.log("C")
}
else if (calificacion >= 60) {
    console.log("D")
}
else {
    console.log("F")
}