let lampara = prompt("está enchufada la lámpara?")


if (lampara == "no" ) {
    document.write (" <h3> ENCHÚFALA <h3> ");
    
} else if (lampara == "si") {
    let foco = prompt (" El foco está fundido?");
    if ( foco == "si") {
         document.write(" <h3> cambia el foco <h3> ");
        }
    else if (foco == "no" )
     { document.write (" <h3> Cómprate otra lámpara! <h3> ");
    }
    else{
        document.write (" <h1> por favor, responda si/no  <h1> ");
    }
} else{
    document.write (" <h1> por favor, responda si/no  <h1> ");
}