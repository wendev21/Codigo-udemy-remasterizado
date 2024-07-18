// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');    
        
        setTimeout(()=>{
            resolve('los clientes fueron descargados');
        }, 5000);
    });
}
function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando Pedidos... Espere')

        setTimeout(()=>{
            resolve('Los pedidos Fueron Descargados!!')
        }, 3000);
    })
}

async function app(){
    try{
    //     const resultado = await descargarNuevosClientes();
    //     console.log(resultado);
    //     // console.log('Epste código SI se bloquea')
    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);
    console.log(resultado[1]); 
    }catch(error){
        console.log(error);
    }
}
app();

// console.log('Este código NO se bloquea')