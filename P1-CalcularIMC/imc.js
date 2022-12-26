let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let boton = document.querySelector('#boton');

// Creamos una funcion para hacer el calculo
function calcularImc(){
    let imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
    document.getElementById("resultado").innerHTML = "Su imc es: "+imc;
}

boton.onclick = calcularImc;