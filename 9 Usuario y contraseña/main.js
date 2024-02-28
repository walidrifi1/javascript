


    const user = "wilson";
    const pass = "holamundo";

    let usuario = "";
    let contrasena = "";
    let i = 0;

 while ((usuario != user || contrasena != pass) && i<3 ){

    usuario = prompt ("Introduzca usuario (wilson)");
    contrasena = prompt ("Introduzca contraseña (holamundo)");
    
    if (usuario==user && contrasena==pass){
    document.write("<h2> Correcto! <h2>");
    window.open("https://www.google.com");
    } else if(i==2){
    document.write("<h1> Superado limite de intentos! <h1>");
    } else{
    alert("Acceso denegado!");
    }

    i++;

 }

