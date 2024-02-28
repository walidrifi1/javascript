// Instructions
// 1- CALCULO PESO IDEAL

// Pides al usuario su altura y peso. Con un botón, hacer que calcule el peso ideal y lo muestre en pantalla, del tipo: para la altura X y el peso Y, tu peso ideal sería: Z .

// Usar inputs para pedir los datos, y divs para mostrar el resultado.

// “Para conocer cuál es tu peso ideal, deberás medir tu altura siempre en metros y tu peso en kilos. Una vez hecho, realiza una operación simple: divide tu peso entre tu altura al cuadrado para obtener el IMC (indice de masa corporal). Si tu IMC es inferior a 18.5, se podría considerar que estás por debajo del peso recomendado.”



function funcionimc(){
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
altura = altura/100;
let calculo = (peso/altura**2);
calculo = calculo.toFixed(2)
let imcmax = 24.9;
let imcmin = 18.5;


if ((calculo >= imcmin) && (calculo <= imcmax)){
    document.getElementById("resultado").innerHTML = "Tu IMC es: " + calculo + " Felicidades! Estás dentro de los parámetros legales!";
} else if (calculo < imcmin ) {
    document.getElementById("resultado").innerHTML = "Tu IMC es: " + calculo + " Está por debajo del mínimo recomendado, acude a tu dietista de confianza!";

}else     document.getElementById("resultado").innerHTML = "Tu IMC es: " + calculo + " Está por debajo del mínimo recomendado, acude a tu dietista de confianza!";

}











// 2- RELLENAR TICKET DE CINE

// Tienes una imagen de ticket de entrada para el cine, vacío, y unos inputs para rellenar: se te pide el nombre, fecha y la butaca (fila y asiento). Y al darle botón 'enviar', que se muestren en la imagen del ticket de entrada las opciones elegidas por el usuario. Esto implica maquetar el ticket mediante divs y CSS (puedes usar también una imagen de fondo para el papel).