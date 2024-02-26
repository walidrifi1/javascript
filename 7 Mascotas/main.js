function adopto(){

    let mascota = document.getElementById("mascota").value.toLowerCase();

    const fondo = document.getElementById("imagen")

    if (mascota == "perro"){
        fondo.style= " background-image: url(img/perro.webp);";
    }else if (mascota == "lince"){
        fondo.style= "background-image: url(img/lince.jpg);";
    } else if (mascota == "ardilla"){
        fondo.style= "background-image: url(img/ardilla.jpg);";
    } else if (mascota == "sorpresa"){
        fondo.style= "background-image: url(img/hamster.jpg);";
    } else{ 
        fondo.style= "background-image: url(img/error.webp)";

    }

}







function reset(){
    const fondo = document.getElementById("imagen")
    fondo.style= " background-image: url(img/interrogante.jpg);";

}