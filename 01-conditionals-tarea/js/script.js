/*------------------Definir variables-------------------*/
let ingreso = window.prompt("Ingrese la cantidad a convertir");
let country = window.prompt("Ingrese un pais para realizar la Divisa (1.USA, 2.Japon, 3.Canada, 4.Alemania");

/*------------------Funcion Divisa-------------------*/
function cambio() {
    if (country == 1) {
    moneda = ingreso*0.049;
    } else if (country == 2) {
    moneda = ingreso*5.43;
    } else if (country == 3) {
    moneda = ingreso*0.062;
    } else if (country == 4) {
    moneda = ingreso*0.042;
    }     
    else {
    console.log ("La opcion ingresada es incorrecta");
    }
    return ingreso;
}

cambio();

function conversion () {
    if (country == 1){
        divisa = "USD"
    } else if (country == 2) {
        divisa ="YEN"
    } else if (country == 3){  
        divisa = "CAN"
    } else if (country == 4){
        divisa = "EUR"
    }
    return divisa;
}
conversion();


console.log (`${ingreso} MXN Equivale a ${moneda} ${divisa}`)