// arreglos o arrays

const numeros = [10, 20, 30, 40];
// console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
// console.table(meses);

//acceder valores de un arreglo
// console.log(meses[3]);

//conocer la extensión de un array
console.log(meses.length);

meses[meses.length] = 'Junio';
meses.push('Julio'); // agrega al final del array
numeros.unshift(-10, -20, -30); // agrega al inicio del array
meses.pop(); // elimina el ultimo
meses.shift(); // elimina al inicio
console.table(numeros);

numeros.splice(2, 1); // 1rst arg: position to delete 2nd: arg: how many delete after that position
console.table(numeros);
meses.forEach(
    function(numero) {
        console.log(numero);
    }
)

// Rest Operator o Spread Operato

const nuevoArreglo = [...meses, 'julio'];
console.table(nuevoArreglo);