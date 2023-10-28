window.onload = function(){
	console.log("La pagina cargo correctamente");
	var auxU;
	var auxC;
}

function signup(){
	console.log("Funciona");
	console.log(usuarioSignup.value);
	console.log(contraSignup.value);
	
	auxU = usuarioSignup.value;
	auxC = contraSignup.value;
	
	if(auxU == usuarioSignup.value && auxC == contraSignup.value){
		usuarioSignup.value = '';
        contraSignup.value = '';
		document.getElementById('p1').innerHTML = "Registro exitoso";
	}
	
}

function login(){
	console.log("Funciona");
	console.log(auxU);
	console.log(auxC);
	
	if (auxU != usuarioLogin.value){
		alert("Error: Usuario ingresado no esta registrado");
	}
	if (auxU == usuarioLogin.value && auxC != contraLogin.value){
		alert("Error: Contrasena incorrecta");
	}
	if (usuarioLogin.value == auxU && auxC == contraLogin.value){
		document.getElementById('p3').innerHTML = "Cerrando esta ventana...";
		usuarioLogin.value = '';
        contraLogin.value = '';
		alert("Iniciando sesion...");
		window.open('main.html');
		window.close();
	}
		
}
