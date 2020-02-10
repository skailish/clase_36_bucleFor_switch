// Estaciones del año II

// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina


const season = prompt("Ingrese una estación");

switch (season) {
    case "verano":
        alert(`Verano:
        Comienza el 21/12
        Termina el 21/3.`)
        break

    case "otoño":
        alert(`Otoño:
        Comienza el 21/3
        Termina el 21/6.`)
        break

    case "invierno":
        alert(`Invierno:
        Comienza el 21/6
        Termina el 21/9.`)
        break

    case "primavera":
        alert(`Primavera:
        Comienza el 21/9
        Termina el 21/12.`)
        break

    default:
        alert("No ingresó un nombre válido")
        break
}