const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const carrito = [
    {nombre: 'monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonod', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]
//for Each
meses.forEach(function(mes){
    if (mes == 'Marzo')
        {
            console.log('Marzo si');
        }
}) 
// Para arreglos planos
let resultado = meses.includes('Marzo');
let resultado1 = meses.includes('Diciembre');
console.log(resultado);
console.log(resultado1);
// para arreglo bidimensionales
let result = carrito.some(function(producto){
    return producto.nombre == 'Celular '
})
console.log(result);
//reduce
let reslt = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0)
console.log(reslt);

let res = carrito.filter(function(producto){
    return producto.precio > 400;
})
console.log(res); 
// Declaracion de función
function sumar(){
    console.log(10 + 10);
}
sumar ();
// expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();
//IIFE
(function(){
    console.log('Estto es una función')
}
)();