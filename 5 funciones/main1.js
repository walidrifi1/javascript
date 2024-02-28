
//2- Pide dos números. Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parametros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return



function sumar(){
    let resultado = num1 + num2;
    document.write(resultado);
    return resultado;
}

function restar(){
    let resultado = num1 - num2;
    document.write(resultado);
    return resultado;

}







let operacion = prompt("Indica que operacion deseas hacer, sumar con +  si quieres restar con -");
let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce otro número"));


if (operacion == "+"){
    sumar();
}
else if ( operacion == "-"){
    restar();
}
else {
    document.write("<h1>Introduce el simbolo de la operación correcto!<h1>");
}

