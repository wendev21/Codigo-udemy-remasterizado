const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`el resultado es ${resultado}`))
});

if (Notification.permission == 'granted')
{
    new Notification('Esta es una Notificación', {
        icon : '../img/1040216.png',
        body : 'Codigo de js'
    })
}