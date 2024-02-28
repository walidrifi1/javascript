

//+EXTRA: prueba a realizar lo mismo con return

function sumar(){
    let resultado = num1 + num2;
    return resultado;
}

function restar(){
    let resultado = num1 - num2;
    return resultado;
}

let operacion = prompt("Indica que operacion deseas hacer, sumar con +  si quieres restar con -");
let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce otro número"));


if (operacion == "+"){
    sumar();
    let solucion= sumar();
    document.write("<h3>El resultado de tu operación es:<h3> " + solucion );
}
else if ( operacion == "-"){
    restar();
    let solucion= restar();
    document.write("<h3> El resultado de tu operación es: <h3>" + solucion);
}
else {
    document.write("<h1>Introduce el simbolo de la operación correcto!<h1>");
}

