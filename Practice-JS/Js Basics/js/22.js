// Control structures

const puntaje = 1000;

if(puntaje == 1000){
    console.log('Si el puntaje es 1000');
} else{
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito)
{
    console.log("El usuario puede pagar");
}else{
    console.log("FONDO INSUFICIENTE");
}

const rol = 'ADMIN';
if (rol === 'ADMIN')
{
    console.log("Acceso Total");
}else if (rol === 'EDITOR')
{
    console.log("Acceso moderado");
}else
{
    console.log("No tienes acceso");
}