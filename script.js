
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var ingresaMensaje = document.querySelector("#input-texto");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");
var resultadoEncriptado = document.querySelector("#msg");


function reemplazaEncripta (letra) {
	if (letra == 'a') {
		letra = 'ai';
		return letra;
	} else if (letra == 'e') {
        letra = 'enter';
        return letra;
	} else if (letra == 'i') {
        letra = 'imes';
        return letra;
    } else if (letra == 'o') {
        letra = 'ober';
        return letra;
    } else if (letra == 'u') {
        letra = 'ufat';
        return letra;
    }
}


function desencriptarReemplazo(letra) {
	if (letra == 'ai') {
		letra = 'a';
		return letra;
	} else if (letra == 'enter') {
		letra = 'e';
		return letra;
	} else if (letra == 'imes') {
		letra = 'i';
		return letra;
	} else if (letra == 'ober') {
		letra = 'o';
		return letra;
	} else if (letra == 'ufat') {
		letra = 'u';
		return letra;
	}
}


function encriptar(letras) {
	var mensajeEncriptado = letras.replace(/a|e|i|o|u/g, reemplazaEncripta);
	return mensajeEncriptado;
	
}


function desencriptar(letras) {
	var mensajeDesencriptado = letras.replace(/ai|enter|imes|ober|ufat/g, desencriptarReemplazo);
	return mensajeDesencriptado;
}


function verificarTexto(letras) {
	var restriccion = /[^a-zñ\s]/g;
	if (restriccion.test(letras)) {
		alert("Solo letras minúsculas, sin acento");
		return false;
	} else {
		return true;
	}
}


btnEncriptar.addEventListener('click',function (event) {
	event.preventDefault();
	var letras = ingresaMensaje.value;
	var verificado = verificarTexto(letras);
	if (verificado == true) {
		var mensajeFinal = encriptar(letras);
		resultadoEncriptado.style.color = "";
		resultadoEncriptado.value = mensajeFinal;
	} else {
		resultadoEncriptado.style.color = "red";
		resultadoEncriptado.value = "Corregir e intentar otra vez"
	}
});


btnDesencriptar.addEventListener('click', function (event) {
	event.preventDefault();
	var letras = ingresaMensaje.value;
	var verificado = verificarTexto(letras);
	if (verificado == true) {
		var mensajeFinal = desencriptar(letras);
		resultadoEncriptado.style.color = "";
		resultadoEncriptado.value = mensajeFinal;
	} else {
		resultadoEncriptado.style.color = "red";
		resultadoEncriptado.value = "Corregir e intentar otra vez"	
	}
});


btnCopiar.addEventListener('click', function (event) {
	event.preventDefault();
	resultadoEncriptado.select();
	navigator.clipboard.writeText(resultadoEncriptado.value); 
	});

