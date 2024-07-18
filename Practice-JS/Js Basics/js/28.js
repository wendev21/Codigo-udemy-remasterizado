//Class

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    precioProducto(){
        return `El precio del producto es $${this.precio}`
    }
}

const producto = new Producto("Monitor Curvo de 49'", 420);
console.log(producto);
console.log(producto.precioProducto());
console.log(producto.formatearProducto());

//herencia 

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio),
        this.isbn = isbn
    }
    formatearProducto()
    {
        return `${super.formatearProducto() } y su isbn es ${this.isbn}`
    }
}

const libro1 = new Libro("Tecnicas de js", 500, '654641514');
console.log(libro1);
console.log(libro1.formatearProducto());
console.log(libro1.precioProducto());

