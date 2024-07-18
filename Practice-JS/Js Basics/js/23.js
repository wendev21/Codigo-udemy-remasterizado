// switch
const MetodoPago = 'cheque';

switch(MetodoPago){
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El Usuario pagara con cheque, Revisaremos los fondos Primero');
        break ;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break ;    
    default :
        console.log('Aun no Has pagado');
        break
}