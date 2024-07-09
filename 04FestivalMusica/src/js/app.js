document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/${i}.jpg`;
        imagen.alt = `imagen Galeria`;
        //Event Handler
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}
function mostrarImagen(index){
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/${index}.jpg`;
    imagen.alt = `imagen Galeria`;

    //Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);

    //agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal(){
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        modal?.remove();
    }, 500);
}
