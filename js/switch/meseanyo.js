// Meses del año
// Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

// PIDO NÚMERO

let number = Number(prompt("Ingrese un número para conocer el mes"));

switch (number) {
    case 1:
        alert(`El ${number} corresponde al mes de Enero`);
        break
    case 2:
        alert(`El ${number} corresponde al mes de Febrero`);
        break
    case 3:
        alert(`El ${number} corresponde al mes de Marzo`);
        break
    case 4:
        alert(`El ${number} corresponde al mes de Abril`);
        break
    case 5:
        alert(`El ${number} corresponde al mes de Mayo`);
        break
    case 6:
        alert(`El ${number} corresponde al mes de Junio`);
        break
    case 7:
        alert(`El ${number} corresponde al mes de Julio`);
        break
    case 8:
        alert(`El ${number} corresponde al mes de Agosto`);
        break
    case 9:
        alert(`El ${number} corresponde al mes de Septiembre`);
        break
    case 10:
        alert(`El ${number} corresponde al mes de Octubre`);
        break
    case 11:
        alert(`El ${number} corresponde al mes de Noviembre`);
        break
    case 12:
        alert(`El ${number} corresponde al mes de Diciembre`);
        break
    default:
        alert("No ingresó un valor válido");
}