// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let amigo = input.value;

    if (input.value==="") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(amigo);
        console.log(amigos);
        input.value="";
    }

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML+=`<li>${amigos[i]}</li>`
    }
    
}

function sortearAmigo() {

    if (amigos.length>1) {
        let numeroAmigo = Math.floor(Math.random()*amigos.length);
        console.log(numeroAmigo);

        let resultado = document.getElementById('resultado');
        resultado.innerHTML=`<li>El amigo elegido es: ${amigos[numeroAmigo]}</li>`
    } else {
        alert("Debes agregar al menos 2 amigos para sortear");
    }

    
}


