///////CONDICIONES PARA LA LOGICA//////////

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const ingresoMensaje = document.querySelector(".ingresoMensaje");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");

////////UTILIDADES////////////

ingresoMensaje.addEventListener('focus', function(){
    ingresoMensaje.placeholder = "" }); //limpia el placeholder cuando detecta la barra de ingreso
ingresoMensaje.addEventListener('blur', function(){
    ingresoMensaje.placeholder = "Ingrese su mensaje" }); 

////////////MODO OSCURO////////////////

//boton modo oscuro
document.addEventListener("DOMContentLoaded", function() {
const botonModoOscuro = document.querySelector(".modoOscuro");
let modoOscuro = true;
botonModoOscuro.addEventListener('click', () => {
modoOscuro = !modoOscuro;
if (modoOscuro) {
    //movemos el boton con margin-right a 8rem//
    botonModoOscuro.style.marginRight = "8rem";
    document.body.style.background = "black";   
    document.querySelector(".auxiliar").style.background = "var(--color5)";
    document.querySelector("h6").style.color = "white";   
    document.querySelector(".ingresoMensaje").style.backgroundColor = "black";
    document.querySelector(".mensajeEncriptado").style.backgroundColor = "black";
    document.querySelector(".mensajeEncriptado").style.backgroundImage = "url('Imagenes/candado-Oscuro.png')";
} else {
    //Vuelve al codigo original del css//
    botonModoOscuro.style.marginRight = "";
    document.body.style.background = "";   
    document.querySelector(".auxiliar").style.background = "";
    document.querySelector("h6").style.color = "";   
    document.querySelector(".ingresoMensaje").style.backgroundColor = "";
    document.querySelector(".mensajeEncriptado").style.backgroundColor = "";
    document.querySelector(".mensajeEncriptado").style.backgroundImage = "";
    }
})
});

//////Funciones de los botones/////

////BOTON ENCRIPTAR//////

const botonEncriptar = document.querySelector(".btn_encriptador");

botonEncriptar.addEventListener('click', function btn_encriptar(){
    let hayMayuscula = false;
    const acentos = /[áéíóú]/;
    let sinEspacio = ingresoMensaje.value.replaceAll(' ', 'k');
    console.log(sinEspacio);
    for (let i = 0; i < sinEspacio.length; i++) {
        if (sinEspacio[i] == sinEspacio[i].toUpperCase()) {
            hayMayuscula = true;
            break;
        } else if (acentos.test(sinEspacio.value)) {
            hayMayuscula = true;
            break;
        } 
    }
    if (hayMayuscula) {
        alert('No se permiten mayusculas ni acentos');
        ingresoMensaje.value = "";
    } else {
        const textoEncriptado = encriptar(ingresoMensaje.value);
        mensajeEncriptado.value = textoEncriptado;
        ingresoMensaje.value = "";
        mensajeEncriptado.style.backgroundImage = "none";
    }
}
);

/////BOTON COPIAR/////
const botonCopiar = document.querySelector(".btn_copiar");

botonCopiar.addEventListener('click',  function btn_copiar(){
ingresoMensaje.value = mensajeEncriptado.value;
mensajeEncriptado.value = "";
mensajeEncriptado.style.backgroundImage = "url('Imagenes/candado-Oscuro.png')";
}
);

/////BOTON DESENCRIPTAR/////
const botonDesencriptar = document.querySelector(".btn_desencriptador");

botonDesencriptar.addEventListener('click',  function btn_desencriptar(){
const textoDesencriptado = desencriptar(ingresoMensaje.value);
ingresoMensaje.value = textoDesencriptado;
}
);

//////Funciones principales//////

function encriptar(ingresoMensaje){
let mensaje = "";
    for (let i = 0; i < ingresoMensaje.length; i++) {
        const aux = ingresoMensaje[i];

        if (ingresoMensaje[i] == "a") {
            mensaje += "ai";
        } else if (ingresoMensaje[i] == "e") {
            mensaje += "enter";
        } else if (ingresoMensaje[i] == "i") {
            mensaje += "imes";
        } else if (ingresoMensaje[i] == "o") {
            mensaje += "ober";
        } else if (ingresoMensaje[i] == "u") {
            mensaje += "ufat";
        } else {
            mensaje += aux;
        }
    }
    return mensaje;
}
function desencriptar(ingresoMensaje) {
    let mensaje = "";
    for (let i = 0; i < ingresoMensaje.length; i++) {
        const aux = ingresoMensaje[i];

        if (ingresoMensaje[i] == "a" && ingresoMensaje[i + 1] == "i") {
            mensaje += "a";
            i++;
        } else if (ingresoMensaje[i] == "e" && ingresoMensaje[i + 1] == "n" && ingresoMensaje[i + 2] == "t" && ingresoMensaje[i + 3] == "e" && ingresoMensaje[i + 4] == "r") {
            mensaje += "e";
            i += 4;
        } else if (ingresoMensaje[i] == "i" && ingresoMensaje[i + 1] == "m" && ingresoMensaje[i + 2] == "e" && ingresoMensaje[i + 3] == "s") {
            mensaje += "i";
            i += 3;
        } else if (ingresoMensaje[i] == "o" && ingresoMensaje[i + 1] == "b" && ingresoMensaje[i + 2] == "e" && ingresoMensaje[i + 3] == "r") {
            mensaje += "o";
            i += 3;
        } else if (ingresoMensaje[i] == "u" && ingresoMensaje[i + 1] == "f" && ingresoMensaje[i + 2] == "a" && ingresoMensaje[i + 3] == "t") {
            mensaje += "u";
            i += 3;
        } else {
            mensaje += aux;
        }
    }
    return mensaje;
}




