// Método de Propiedad 
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción ${id}`);
    },
    pausar: function(){
        console.log(`Pausando.....`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist ${nombre}`);
    },
    reprouciendoPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la Canción ${id}`);
}

console.log(reproductor);
reproductor.reproducir(25);
reproductor.pausar();
reproductor.borrarCancion(999);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reprouciendoPlaylist('Heavy Metal');
