// function sumar(n1, n2){
//     return n1 + n2;
// }
// let result = sumar(3, 3);
// console.log(result);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

let impuesto = calcularImpuesto(total);
console.log(`total ${total}`);
console.log(`Total a Pagar ${impuesto}`);