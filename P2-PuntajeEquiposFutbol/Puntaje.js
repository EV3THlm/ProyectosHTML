/*
    Cada partido ganado vale 3 puntos
    Cafa partido empatado vale 1 punto
    Author: @EV3TH
*/

let partidosGanados = document.querySelector('#partidosGanados');
let partidosEmpatados = document.querySelector('#partidosEmpatados');
let boton = document.querySelector('#boton');

function calcularPuntaje(){
    totalPuntos = (parseInt(partidosGanados.value)*3) + parseInt(partidosEmpatados.value);

    // print en el h2 con el id 'resultado'
    document.getElementById("resultado").innerHTML = "Puntos totales: "+totalPuntos;
}

// Llamamos la funcion cada que presione el boton 
boton.onclick = calcularPuntaje;