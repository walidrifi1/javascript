// 2- COCHE NO ARRANCA

// Solucionar mediante condicionales el siguiente algoritmo:


// Oh! Estás aparcado en la calle, pero el coche no arranca...

// Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
//            - Tiene gasolina?
//                         * No => hay que poner gasolina
//                                   - Tienes dinero?
//                                  • Si => poner gasolina
//                                  • No => vas en metro
//                           * Sí que tiene gasolina:


//                                   - Tiene batería?
//                                                * No => recargar batería
//                                                * Sí => pásate por el mecánico

let casa = prompt("Vives cerca?");
let caminar = prompt(" Tienes ganas de caminar? si o no");
casa = casa.toLowerCase();
caminar = caminar.toLowerCase();


if(casa == "si" && caminar == "si"){
    document.write("Ve andando, mañana ya será un nuevo día!");
} else {
    let gasolina = prompt("Tienes gasolina?");
    gasolina = gasolina.toLowerCase();
    if (gasolina == "no") {
     
        let dinero = prompt("Tienes dinero?");
        dinero = dinero.toLowerCase();
        if  ( dinero == "si"){
            document.write("ve a poner gasolia!");
         } else {
                document.write("Te vas en metro campió!");
            }
        } else {
        let bateria = prompt("Tienes batería?");
        bateria = bateria.toLowerCase();
        if( bateria == "si") {
            document.write("pásate por el mecánico");
        } else {
                document.write("Recarga la batería");
            }
        }
    }
