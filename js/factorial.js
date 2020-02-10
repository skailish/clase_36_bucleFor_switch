let factorial = Number(prompt("Ingrese un nùmero para calcular su factorial"));
let result = 1;
for (i = factorial; i > 0; i--) {
    result *= i;
}

alert(`El factorial de ${factorial} es:
${result}`)