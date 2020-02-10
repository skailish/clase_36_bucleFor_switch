// Ruleta

// Crear un programa que simule una apuesta de ruleta.El programa debe mostrar las opciones posibles para apostar y preguntar qué se desea elegir:
// ROJO: gana si el número es rojo
// NEGRO: gana si el número es negro
// PAR: gana si número es par
// IMPAR: gana si el número es impar
// ALTA: gana si el número es menor o igual a 18
// BAJA: gana si el número es mayor a 18
// PRIMERA DOCENA: gana si el número está incluido en la primera docena(del 1 al 12)
// SEGUNDA DOCENA: gana si el número está incluido en la segunda docena(del 13 al 24)
// TERCERA DOCENA: gana si el número está incluido en la tercera docena(del 25 al 36)
// Una vez elegida la opción, el programa debe generar aleatoriamente un número entre 1 y 36, de color negro o rojo.Mostrar un mensaje con el número que salió y si se ganó o no la apuesta.

let result = "";

let bet = prompt(`Haga su apuesta:
ROJO
NEGRO
PAR
IMPAR
ALTA
BAJA
PRIMERA
SEGUNDA
TERCERA`);


// DEFINE NUMERO COMPUTADORA
let numberComputer = Math.round((Math.random() * 36) + 1);

// DEFINE COLOR COMPUTADORA
let colorComputer = Math.round(Math.random() * 1);
if (colorComputer === 0) {
    colorComputer = "rojo";
} else {
    colorComputer = "negro";
}


switch (bet) {
    case "rojo":
        if (colorComputer === bet) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "negro":
        if (colorComputer === bet) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "par":
        if (numberComputer % 2 == 0) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "impar":
        if (numberComputer % 2 != 0) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "alta":
        if (numberComputer <= 18) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "baja":
        if (numberComputer > 18) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "primera":
        if (numberComputer <= 12) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    case "segunda":
        if (numberComputer > 12 && numberComputer < 25) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break


    case "tercera":
        if (numberComputer > 24) {
            result = "Ha ganado!";

        } else {
            result = "Ha perdido!";
        }
        break

    default:
        alert("No ingresó una opción correcta");
}

alert(`${result}
    Su apuesta: ${ bet}
    Salió el ${ numberComputer} ${colorComputer}`)