document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
     const header = document.querySelector('.header');
     const sobreFestival = document.querySelector('.sobre-festival');

     window.addEventListener('scroll', () => {
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }

     })
}

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

    //Boton de cerrar modal
    const cerrarmodalBtn = document.createElement('BUTTON');
    cerrarmodalBtn.textContent = 'X';
    cerrarmodalBtn.classList.add('btn-cerrar');
    cerrarmodalBtn.onclick = cerrarModal;
    modal.appendChild(cerrarmodalBtn);



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
function resaltarEnlace(){
    document.addEventListener('scroll', ()=>{
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        
        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(window.scrollY >= (sectionTop - sectionHeight / 3))
            {
                actual = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        });
    })
}
function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a');
    navLinks.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section =document.querySelector(sectionScroll);
            section.scrollIntoView({behaivor: 'smooth'})
        })
    })
}