const carrito = [
    {nombre: 'monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonod', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

// forEach

carrito.forEach(producto=> console.log(`Una vey por cada Elemento ${producto.nombre}`));

// map

let arreglo = carrito.map (producto=> producto.nombre);

console.log(arreglo);
