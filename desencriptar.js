var textoIngresado     = document.querySelector(".text-input");

btnDesencriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoAIngresar.value;
    textoDesencriptado = texto.replaceAll("enter", "e")
                              .replaceAll("imes", "i")
                              .replaceAll("ai", "a")
                              .replaceAll("ober", "o")
                              .replaceAll("ufat", "u");
    
    mensajeEncriptado.value=textoDesencriptado;
    textoAIngresar.value = "";

});

btnCopiar.addEventListener("click",function(event){
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoAIngresar.focus();
    
});

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/