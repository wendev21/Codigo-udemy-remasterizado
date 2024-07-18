//this

const reservacion = {
    nombre : 'wendy',
    apellido : 'Corzo',
    total : 5000,
    pagado : false,
    informacion : function(){
        //para usar 'this' dentro de la función, no se puede implementar con arrow functions
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion();