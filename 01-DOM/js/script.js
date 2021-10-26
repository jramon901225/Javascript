const mentorsArray = [
    {
        name:"Ivan Diaz",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alan Medina",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Elvira Camarillo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Alejandra Paez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
  ]
    /*
    -Crear thead de la tabla
    -iterar un arreglo que tenga los heads
    -crear un row
    -crear un th por cada elemento de ese arreglo                                 
    -Crear Tbody de la tabla

    */
  let tablaMentor = document.getElementById("mentores"); 
  let tablebody = document.createElement('tbody') ;
  const inputs = document.querySelectorAll('input');
  


  mentorsArray.forEach((Mentor, index) => { 

    let row = document.createElement('tr'); 
    let td = document.createElement('td'); 
    let avg = 0

                /*Iteramos nombres*/
    
    // td.innerText = Mentor.name; 
    // row.appendChild(td); 

                /*Iteramos Materias*/
     
    Mentor.scores.forEach((scores) =>{

     td = document.createElement('td')
     td.innerText = scores.score
     row.appendChild(td); 
   })

                  /*Iteramos Promedio*/

     Mentor.scores.forEach((scores) => {
     td = document.createElement('td')
     avg += scores.score /Mentor.scores.length
     td.innerText = avg 
   })
    row.appendChild(td)
    tablaMentor.appendChild(tablebody);
    tablebody.appendChild(row);

                /* Creamos Botones */

   const button = document.createElement('button');
   button.setAttribute('data-person', index);
    button.type = 'button'
    button.innerText = 'delete'
    row.appendChild(button)
    tablebody.appendChild(row)
    button.addEventListener('click', (event) =>{
        button.closest('tr').remove();
    })
  })
  
 
  const createMentor (() => {
    let allMentors = []
      const nameMentor = {
          name: '',
          html: '',
          css: '',
          js: '',
          react: '',
      }
      inputs.forEach((input) => {
        createMentor[input.name] = input.value;
      }  
  })
  allMentors.push(nameMentor)

