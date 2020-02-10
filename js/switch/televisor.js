// Televisor

// Hacer un programa que empiece preguntando si se desea prender el televisor.Si elige que no, el programa debe terminar.Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:

// CAMBIAR CANAL: permite ingresar un canal(0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.

let tvON = "";
let volume = Math.round(Math.random() * 99);
let channel = Math.round(Math.random() * 99 + 1);
let option = 0;

tvON = confirm("¿Desea encender el televisor?");

switch (tvON) {

    case true:// ENCIENDE TV
        option = Number(prompt(`
        La TV está encendida.
        Canal: ${channel}
        Volúmen: ${volume}
    
        Elija una opción:
        1 CAMBIAR CANAL: permite ingresar un canal(0 al 99)
        2 CANAL SIGUIENTE: sube un canal
        3 CANAL ANTERIOR: baja un canal
        4 SUBIR VOLUMEN: sube en volumen en 5
        5 BAJAR VOLUMEN: disminuye en volumen en 5
        6 MUTEAR: pone el volumen en 0`))
        break

    case false: // NO ENCIENDE LA TV
        alert("Adios");
        break
}


switch (option) {
    case 1:// CAMBIAR CANAL
        channel = prompt("Elija el canal");
        prompt(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    case 2: // CANAL SIGUIENTE
        channel += 1;
        alert(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    case 3: // CANAL ANTERIOR
        channel -= 1;
        alert(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    case 4: // SUBIR VOLUMEN
        volume += 5;
        alert(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    case 5: // BAJAR VOLUMEN
        volume -= 5;
        alert(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    case 6: // MUTEAR
        volume = 0;
        alert(`Canal: ${channel}
        Volúmen: ${volume}`)
        break

    default:
        alert("No ha ingresado una opción correcta");
}