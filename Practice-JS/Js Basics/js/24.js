//For loop

 for(let i = 0; i <= 10; i++)
 {
     console.log(i);
 }

 for (let i = 1; i <= 30; i++ )
 {
     if (i % 2 == 0)
     {
         console.log(`es par : ${i}`);
     }else{
         console.log(`es impar : ${i}`);
     }
 }

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

 for(let i = 0; i < carrito.length; i++)
 {
     console.log(carrito[i].nombre);
 }
 // while Loop

i = 0;

 while(i < 10) // condición
 {
     console.log(i);
     i++; //incremento
  }
// Do while Loop

i = 100;

do {
    console.log(i);
    i++;
}while( i < 10);