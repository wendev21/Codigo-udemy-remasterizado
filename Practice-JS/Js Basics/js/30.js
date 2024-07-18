const usuarioAuth = new Promise((resolve, reject)=>{
    const auth = false;
    if (auth){
        resolve('Usuario Autenticado'); // El promise se cumple
    }else{
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
})

usuarioAuth
.then(Resul => console.log(Resul))
.catch(error=> console.log(error))

console.log(usuarioAuth);

//There are three types of promises values
// Pending : has not been fulfilled, nor rejected
// fulfilled : it has already been fulfilled
// Rejected : has been rejected and cannot be fulfilled