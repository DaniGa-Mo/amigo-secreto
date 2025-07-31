
// app.js
//Array para almacenar los nombres de los amigos ingresados
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
    let ingresoAmigo = document.getElementById('amigo');
    if (ingresoAmigo.value.trim() === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }else{
        amigos.push(ingresoAmigo.value.trim());
        ingresoAmigo.value = ""; // Limpiar el campo de entrada
        mostrarAmigos();
    }
}

//Función para mostrar los amigos en la lista
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Función para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let nombreSorteado = document.getElementById('resultado');
    nombreSorteado.innerHTML = "El Amigo secreto sorteado es: " + amigoSorteado;
}
