// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 7);

const aprendiendo = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo("JavaScript");

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

meses.forEach( mes => {
    if (mes == 'Marzo')
        {
            console.log('Marzo si');
        }
}) 

let result = carrito.some(producto => producto.nombre == 'Celular');
console.log(result);

let reslt = carrito.reduce((total, producto)=> total + producto.precio , 0)
console.log(reslt);

let res = carrito.filter(producto=> producto.precio > 400);
console.log(res); 