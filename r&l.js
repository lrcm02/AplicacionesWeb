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

	if (auxC == "" || auxU == ""){
		alert("Campos vacios");
	}
	
	if(auxU == usuarioSignup.value && auxC == contraSignup.value && auxU != "" && auxC != ""){
		storeData();
		usuarioSignup.value = '';
        contraSignup.value = '';
        edad.value = '';
        genero.value = '';
        pais.value = '';
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
	if (usuarioLogin.value == "" || contraLogin.value == ""){
		alert("Campos vacios");
	}
	if (usuarioLogin.value == auxU && auxC == contraLogin.value && auxU != "" && auxC != ""){
		usuarioLogin.value = '';
        contraLogin.value = '';
		alert("Iniciando sesion...");
		window.open('main.html');
		window.close();
	}
		
}

function storeData(){
	usernameString = JSON.stringify(usuarioSignup.value);
    window.localStorage.setItem("nuevoNombre", usernameString);

    ageString = JSON.stringify(edad.value);
	window.localStorage.setItem("nuevaEdad", ageString);

	genderString = JSON.stringify(genero.value);
	window.localStorage.setItem("nuevoGenero", genderString);

	countryString = JSON.stringify(pais.value);
	window.localStorage.setItem("nuevoPais", countryString);
}