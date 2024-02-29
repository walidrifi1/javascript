let plato = "";
let i= 0;

while(plato != "salir"){

plato = prompt("que te apetece comer hoy?").toLowerCase();
i++;
if(plato != "salir"){

    alert("Has pedido:  " + plato);
    document.getElementById("lista").innerHTML += i +" - Has pedido: " + plato + "<br>";
}
if (i == 5){
    alert("Cuidado!! Vas a reventar!");
}


}
