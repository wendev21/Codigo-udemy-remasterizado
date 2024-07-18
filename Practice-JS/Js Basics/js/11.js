const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
//forma antigua
const precioProducto = producto.precio;
console.log(precioProducto);

// Destructing
const {precio, nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);
