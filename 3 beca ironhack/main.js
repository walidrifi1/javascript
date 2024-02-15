// //- BECA ESTUDIANTE

// Para conseguir una beca en Hack-Iron el estudiante debe cumplir las siguientes condiciones:

// 1- Que sea mayor o igual a 18 años y resida en Barcelona

// 2- O bien, que sea mayor de 30 años y tenga familia numerosa

// 3- O bien, Que tenga entre 12 y 18 años y sea un geni@ de la programación

// Recuerda que puedes usar los métodos toLowerCase() o toUpperCase() para facilitar la comparación de strings.



let edad = parseInt(prompt("Cuántos años tienes?"));
let ciudad = prompt("En qué ciudad resides?");
let familiaNumerosa = prompt(" Tienes famíla numerosa?");
let conocimiento = prompt ("Califica del uno al 10 tus conocimientos en programación!");

if ((edad >= 18 && ciudad == "barcelona") || ( 30 < edad && familiaNumerosa == "si" ) || ( edad > 12 && edad < 18 && conocimiento >= 8 ) ){
    document.write ("Felicidades!! Eres apto para percibir la beca de IronHack!");
} else {
    document.write("Lo siento no cumples con los requisitos");}