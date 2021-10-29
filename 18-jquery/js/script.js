//     // Introduccion Jquery

//     //antes usabamos 
// document.getElementById('id');
//     //con jquery
// console.log($('#test'))// buscamos un ID
// console.log($('.test'))// buscamos una clase
// console.log($('li'))// buscamos una etiqueta

//     // Estos son iguales (Asi se Crea un string) JS
// let h1 = document.createElement('h1')
//     // Estos son iguales (Asi se Crea un string) jquery
// let h2 = $('<h1>hola desde jquery</h1>')
// $('ul').prepend(h2);

//     //
// let h3 = $('h3');
//     //Selector de jquery
//     $() // los elementos heredan los metodos de jquery con este selector
//     //insertar contenido hasta el final (ultimo hijo) de cada elemento en la coleccion
// h1.append('Hola desde query append');
//     //Inserta un nodo antes del padre ( lo pone en primer lugar, al principio)
// $('ul').prepend(h1)
//     // Mueve los elementos fuera del selector (antes)
// $('ul').before(h1)
//     // Mueve los elementos fuera del selector (despues)
// $('ul').after(h1)
//     //Ocultar elementos
// $('ul').hide()
//     //Remover elementos del DOM
// $('ul').remove()
//     //inyectar HTMl en el selector
// $('body').html('Esto es un texto HTML')
//     // Agregar clases
// $('ul').addClass('className');
//     //Remover clases
// $('ul').removeClass('className');
//     //Switch para cambiar clases(intermcabiar)
// $('ul').toogleClass('className');
//     //para añadir clases de CCS
// $('ul').css('color', 'blue');
//     //Iterar
$('ul').each((index, element) => {
    if($(element).text() === 'indicado')
        $('element').addClass('verde')
})
//     //insertar texto a los elementos
// $('ul').text('')
//     //eventos 
// $('li').mouseover(function (event) {
//     console.log(event)
// });

//     // Ejercicio Comunitario.

//     //seleccionar el elemento con jquery
// $('input').click(() => {
//     //Seleccionamos el input del elemento seleccionado
// const inputSelect = $(".controls-wrapper input[type='radio']:checked")
//     //añadimos un atributo a elemento( clase : elemento en el que hicimos click)
// $('#figura').attr('class', inputSelected)
// })

$('button').click((event) => {
    const value = $('input').val() //obtener el valor ingresado en una variable
    
    const card = $('<div></div>').appendTo($('.div')) // crear el div para el input
    
    card.addClass('block')//agregar clases a los divs creados
    
    
   $('.div').append(card.html(value))// pegamos card en div con el texto del input
  
})

$('.block').click((event) => {
    

})

