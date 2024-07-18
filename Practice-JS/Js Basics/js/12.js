"use strict"; // run JS in mood Strict
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);  
// no permite modificar, eliminar, agregar
Object.freeze(producto);
//producto.imagen = 'laimagen.jpg';

//para revisar si un objeto puede recibir mas atributos

console.log(Object.isFrozen(producto));


// no permite eliminar, agregar, pero si modificar
Object.seal(producto);
//producto.imagen = 'laimagen.jpg';

//para revisar si un objeto puede recibir mas atributos

console.log(Object.isSealed(producto));