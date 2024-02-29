let nombre1 = prompt("Escribe un nombre");
let nombre2 = prompt("Escribe otro nombre");

document.getElementById("texto").innerHTML="En Barcelona está " + nombre1 + " y en Barcelona " + nombre2;

frase;

function fraseinter(){
let  A = nombre1;
let  B = nombre2;

nombre1 = B;
nombre2 = A;

document.getElementById("texto").innerHTML="En Barcelona está " + nombre1 + " y en Barcelona " + nombre2;


}