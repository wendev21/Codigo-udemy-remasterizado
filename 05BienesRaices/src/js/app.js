document.addEventListener('DOMContentLoaded', function(){
    eventlistener();
    darkMode();
});
function darkMode(){
    const prefiereDarkmode = window.matchMedia('(prefers-color-scheme : dark)');

    if(prefiereDarkmode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkmode.addEventListener('change', function(){
        if(prefiereDarkmode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener("click", function(){
        document.body.classList.toggle('dark-mode');
    });
}
function eventlistener(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    }else{
        navegacion.classList.add('mostrar');
    }

    /*  versión simplificada 
    navegacion.classList.toggle('.mostrar');
    */
}
