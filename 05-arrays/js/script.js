// Crear funcion que permita indicar la cantidad de koders a guardar,
// que pida tantos nombre completos de koders como se haya indicado, y 
// que imprima el nombre del koder y su numero asignado.

// Ejemplo:
// input   
//    - Freddy Krueger
//    - Michael Myers
//    - Jason Vorhees

// output: 
//     koder 1: Freddy Krueger (F.K.)
//     koder 2: Michael Myers (M.M.)
//     koder 3: Jason Vorhees (J.V.)


//     koder 1: Freddy Krueger (F.K.)

function nombrekoders() {
    const cantidad = prompt('Ingresa la cantidad de koders a ingresar');
    let koders = [];

    for (let i = 0; i < cantidad; i++) {
       const nombreCompleto = prompt('ingrese el nombre completo');
       const nombreSeparado = nombreCompleto.split(' ') 
       const nombre =nombreSeparado[0].charAt(0).toUpperCase()
       const apellido =nombreSeparado[1].charAt(0).toUpperCase()
       const resultado = `koder ${i}: ${nombreCompleto} (${nombre}.${apellido}.)`  
       koders.push(resultado) 
    }
    console.log(koders)  
}

nombrekoders()