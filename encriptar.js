var textoAIngresar    = document.querySelector(".text-input");
var btnEncriptacion    = document.querySelector("#btn-encriptar");
var btnDesencriptacion = document.querySelector("#btn-desencriptar");
var mensajeEncriptado  = document.querySelector("#msg");
var btnCopiar          = document.querySelector("#btn-copy");

btnEncriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoAIngresar.value;
    textoEncriptado = texto.replaceAll("e", "enter")
                           .replaceAll("i", "imes")
                           .replaceAll("a", "ai")
                           .replaceAll("o", "ober")
                           .replaceAll("u", "ufat");
    
    mensajeEncriptado.value = textoEncriptado;
    textoAIngresar.value = "";

});


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

