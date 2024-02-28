//1- Dentro de un bucle, ejecutar x veces (x según usuario) una función que te pida saludo (“Hola”, “Adiós”, etc) y nombre (“Marga”, “Carol”, etc ) , y al final te muestre los resultados en pantalla: Hola Marga, Adiós Carol (líneas separadas)



let repeticion = parseInt(prompt("Cúantas veces te lo digo?(máximo 10 veces)"));
if (repeticion>10){
    repeticion=10;
} 

for(i=0; i<repeticion; i++){
    let saludo = prompt("Di un saludo guay");
    let nombre = prompt("Como te llamas?");
    document.write( saludo + " " + nombre + " " + "<hr>");
}







