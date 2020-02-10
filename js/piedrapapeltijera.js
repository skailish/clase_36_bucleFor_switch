// Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen.Por cada ronda, se debe mostrar ambas jugadas(usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes.Al finalizar se debe indicar quién ganó.Ejemplo:

let rondas = Number(prompt("Ingrese cuàntas vueltas desea jugar"));
let user = ""
let computer = "";
let result = "";
let resultUser = 0;
let resultComputer = 0;

for (i = 1; i <= rondas; i++) {

    // JUGADA USUARIO
    user = prompt("Elija PIEDRA, PAPEL o TIJERA");
    // JUGADA PC
    computer = Math.round(Math.random() * 2);
    if (computer === 0) {
        computer = "piedra";
    } else if (computer === 1) {
        computer = "papel";
    } else {
        computer = "tijera";
    }

    // DEFINE RESULTADO
    if (computer === user) { /// EMPATE
        result = `Empate`;

    } else { /// NO EMPATE
        if ((computer === "piedra" && user === "tijera") ||
            (computer === "papel" && user === "piedra") ||
            (computer === "tijera" && user === "papel")) {
            result = `Perdiste`;
            resultComputer += 1;
        } else if ((user === "piedra" && computer === "tijera") || (user === "papel" && computer === "piedra") || (user === "tijera" && computer === "papel")) {
            result = `Ganaste`;
            resultUser += 1;
        } else {
            alert("No se ingresó un valor correcto");
        }
    }

    // RESULTADOS
    alert(`Ronda ${i} de ${rondas}
    Jugador eligió: ${user}
    Computadora eligió: ${computer}
    ${result}
    
    Puntaje: ${resultUser}(Jugadora) - ${resultComputer}(Computadora)
    `)

}





