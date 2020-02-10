let cantidadVueltas = Number(prompt("Ingrese la cantidad de vueltas que realizó"));
let tiempoVuelta = "";
let tiempoTotal = 0;
let vueltas = "";

for (i = 1; i <= cantidadVueltas; i++) {
    tiempoVuelta = Number(prompt(`Ingrese los segundos que tardó en la vuelta ${i}`));
    tiempoTotal += tiempoVuelta;
    vueltas += `\n vuelta ${[i]}: ` + tiempoVuelta + ` segundos`;
}

alert(`Usted a corrido un total de ${cantidadVueltas} vueltas.
Los tiempos de cada vuelta son:
${vueltas}
El promedio de cada vuelta es de: ${Math.round(tiempoTotal / cantidadVueltas)} segundos`)