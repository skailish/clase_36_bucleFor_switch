let songsPerPlaylist = 0;
let songNames = "";

let playlistName = prompt("Elija el nombre de su lista de canciones");
let songsLeft = Number(prompt("¿Cuántas canciones quiere agregar?"));


for (i = songsLeft; songsLeft > 0; songsLeft--) {

    songNames += "\n" + prompt(`Le quedan ${songsLeft} canciones por agregar.
    Escriba el nombre de una canción que quiera agregar a su playlist`);
};

alert(`La playlist '${playlistName}' ha sido creada con éxito.
Las canciones son:
    ${ songNames}`);