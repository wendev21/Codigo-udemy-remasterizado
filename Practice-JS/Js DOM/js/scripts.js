// querySelector

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';
// console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo enlace'
enlaces[0].href = 'https://www.google.de/?hl=de';
enlaces[0].classList.add('nueva_clase');
enlaces[0].classList.remove('nueva_clase');

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar Nuevo enlace

const nuevoEnlace = document.createElement('A');
//add href
nuevoEnlace.href = 'nuevo-enlace.html';
// add text
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// add class
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

// ADD DOM
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// EVENTS

console.log(1);
window.addEventListener('load', function(){ 
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){// only
    console.log(4);
})
console.log(5);

window.onscroll = function(){
    console.log('scrolling..');
}

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    // evento.preventDefault();
    console.log('Enviando Formulario');
})
// Event submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
// valid form
const {nombre, email, mensaje} = datos;
if (nombre  == '' || email === '' || mensaje === '')
    {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return
    }
    else{
        mostrarAlerta('El formulario se ha enviado correctamente');
    }
    console.log('Enviando Formulario....');
})



//Events input or textarea
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', printText);
email.addEventListener('input', printText);
mensaje.addEventListener('input', printText);

function printText(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
// show error

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');

    alerta.textContent = mensaje;
    if (error){
        alerta.classList.add('error');
    }else {
    alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    // fter 5sec
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}