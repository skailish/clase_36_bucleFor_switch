// Tamagochi

// Crear un programa que simule un Tamagochi(mascota virtual).Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable(que son asignados aleatoriamente).Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.


let salud = Math.round(Math.random() * 9) + 1;
let felicidad = Math.round(Math.random() * 9) + 1;
let limpieza = Math.round(Math.random() * 9) + 1;
let energia = Math.round(Math.random() * 9) + 1;

alert(`Pepito tiene los siguientes valores:
Salud: ${salud}
Felicidad ${felicidad}
Limpieza: ${limpieza}
Energía: ${energia}`)

let accion = prompt(`Elija qué hacer para cambiar esos valores:
- Jugar
- Dormir
- Vacunar
- Bañar
- Retar
- Acariciar`);


switch (accion) {

    case "jugar":
        felicidad += 2;
        energia -= 2;
        limpieza -= 1;
        break

    case "dormir":
        energia += 5;
        salud += 2;
        limpieza -= 2;
        break

    case "vacunar":
        salud += 5;
        felicidad -= 6;
        break

    case "bañar":
        salud += 3;
        break

    case "retar":
        felicidad -= 3;
        break

    case "acariciar":
        felicidad += 4;
        break
}

let message = `Pepito tiene los siguientes valores:
Salud: ${salud} puntos
Felicidad: ${felicidad} puntos
Limpieza: ${limpieza} puntos
Energía: ${energia} puntos`;

/// Que no se pase de 10
if (salud > 10) {
    salud = 10;
}
if (felicidad > 10) {
    felicidad = 10;
}
if (limpieza > 10) {
    limpieza = 10;
}
if (energia > 10) {
    energia = 10;
};

/// probando mensajes extra 
if (felicidad <= 0) {
    message += `
    Pepito se entristeció demasiado`
};

if (limpieza <= 0) {
    message += `
    ¡Pepito está demasiado sucio!`
};

if (energia <= 0) {
    message += `
    Pepito está tan cansado que se desmayó`
};

if (salud <= 0) {
    message += `
    Pepito enfermó y murió`
};

alert(message);
