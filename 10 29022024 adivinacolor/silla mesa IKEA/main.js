// TIENDA MUEBLES *

// Tienes un super-catálogo de 4 muebles:

// Silla Mackintosh

// Silla IKEA

// Mesa Roble

// Mesa IKEA

// Encontrar con las preguntas adecuadas  (prompts) y responder s/n y encontrar cuál es el mueble elegido

// Que sea el mínimo de preguntas.

// Usar condicionales con esas respuestas para encontrar el mueble correcto.

// Mostrar respuesta (mueble correcto) en alert o en pantalla.


let mueble = "";

let pregunta1 = prompt("Necesitas un mueble para descansar? S/N").toLowerCase();
let pregunta2 = prompt("Te gustan los muebles de IKEA? S/N").toLowerCase();

if((pregunta1 == "s") && (pregunta2 == "s" )){
    document.write("El mueble ideal para ti es nuestra silla de IKEA!")
}else if ((pregunta1 == "s") && (pregunta2 == "n")){
    document.write("Tenemos lo que necesitas, una silla Mackintosh!")
}else if ((pregunta1 == "n") && (pregunta2 == "s")){
    document.write ("Necesitas una mesa, en concreto la de IKEA!")
}else if( (pregunta1 == "n") && (pregunta2 == "n" )){
    document.write("Sé lo que necesitas, una Mesa de Roble!!");
}else{
    document.write("Haz el favor de leer bien y contestar solo con 'S' o 'N'")
}