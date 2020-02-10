// 🔍 Número mayor o menor

// Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto.Luego, preguntar entre cuántos se desea buscar.Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

// DEFINE VARIABLES REUTILIZABLES
let bigger = 0;// PARA COMPARAR EL NÚMERO MAYOR
let smaller = 999999999; // PARA COMPARAR EL NÚMERO MENOR
let numberAdd = 0; // EL NÙMERO AGREGADO ((CAMBIA EN CADA ITERACIÒN)
let numberList = ""; // HACE UNA LISTA DE LOS NÚMEROS AGREGADOS

// PREGUNTA SI QUIERE ENCONTAR MAYOR O MENOR
let choiceSearch = prompt("Escriba si quiere encontrar el mayor o el menor de un conjunto de números?");
// PREGUNTA CUANTOS NUMEROS HABRA EN EL CONJUNTO
let howMany = Number(prompt("Cuántos números desea agregar al conjunto?"));

if (choiceSearch === "mayor") { /// SI ELIGE SABER CUAL ES EL MAYOR
    for (i = 1; i <= howMany; i++) {

        numberAdd = Number(prompt(`Agregue un número al conjunto. ${i} de ${howMany}`)); // AGREGA UN NÚMERO AL CONJUNTO
        numberList += "\n" + numberAdd; // ARMA UNA LISTA CON LOS NÚMEROS AGREGADOS

        if (numberAdd > bigger) { // DEFINE CUÁL ES EL MAYOR
            bigger = numberAdd;
        }

    }

    // MENSAJE FINAL
    alert(`
    Usted eligió saber cuál es el número ${choiceSearch} de la siguiente lista de números:
    ${numberList}
    El número ${choiceSearch} es el ${bigger}
    `);

} else if (choiceSearch === "menor") { /// SI ELIGE SABER CUAL ES EL MENOR

    for (i = 1; i <= howMany; i++) {

        numberAdd = Number(prompt(`Agregue un número al conjunto. ${i} de ${howMany}`)); // AGREGA UN NÚMERO AL CONJUNTO
        numberList += "\n" + numberAdd; // ARMA UNA LISTA CON LOS NÚMEROS AGREGADOS

        if (numberAdd < smaller) { // DEFINE CUÁL ES EL MENOR
            smaller = numberAdd;
        }

    }
    // MENSAJE FINAL
    alert(`
    Usted eligió saber cuál es el número ${choiceSearch} de la siguiente lista de números:
    ${numberList}
    El número ${choiceSearch} es el ${smaller}
    `);
} else { // PUSO UN VALOR INCORRECTO

    alert("No eligió una opción correcta");

}