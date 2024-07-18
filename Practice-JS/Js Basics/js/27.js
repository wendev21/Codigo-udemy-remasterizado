//POO

// Obcject Literal
const producto = {
    nombre : 'Tablet',
    precio: 500
}
// Object Contructor
 function Producto(nombre, precio, disponible)
 {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
 }

const producto1 = new Producto('celular', 200, true);
const producto2 = new Producto('Laptop', 800, false );
const producto3 = new Producto('Mouse', 50, true);
const producto4 = new Producto('Monitor 40"', 50, true);

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}

 console.log(producto2);
 console.log(producto2.formatearProducto())


 function Cliente(nombre, apellido)
 {
    this.nombre = nombre;
    this.apellido = apellido;
 }

 const cliente1 = new Cliente('Maria', 'perez');
 Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido} ha pagado`
 }
console.log(cliente1);
console.log(cliente1.formatearCliente());