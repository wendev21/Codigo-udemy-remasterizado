// //objetos
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};
console.log(producto);
console.log(producto.precio);
console.log(producto["precio"]);
// agregar propiedad 
producto.imagen = 'imagen.jpg'
console.log(producto.imagen);
//eliminar propieda
delete producto.imagen;
console.log(producto.imagen);




