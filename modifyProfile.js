window.onload = function(){
    console.log("Pagina cargo correctamente");
    //Almacena valor ingresado en el formulario de modificacion a una variable
    username = document.getElementById('username');
    imgUrl = document.getElementById('imgUrl');
    age = document.getElementById('age');
    gender = document.getElementById('gender');
    country = document.getElementById('country');
    
}

function saveChanges(){
	console.log("Realizando cambios");
	
	//Muestra nuevos valores que se mostraran en el perfil, en la consola
	console.log(username.value + " -- " + imgUrl.value + " -- " + age.value + " -- " + gender.value + " -- " + country.value);
	
	//Valores del perfil anterior son almacenados en variables
	viejoNombre = document.getElementById('nombre');
	viejoUrl = document.getElementById('uErreEle');
    viejaEdad = document.getElementById('edad');
    viejoGenero = document.getElementById('genero');
    viejoPais = document.getElementById('pais');

	//Nuevo valor es escrito en la posicion deseada en la previsualizacion del perfil
	viejoNombre.innerHTML = username.value;	
	viejoUrl.src = imgUrl.value;
    viejaEdad.innerHTML = age.value;
    viejoGenero.innerHTML = gender.value;
    viejoPais.innerHTML =  country.value;

	//localStorage.clear(); sirve para limpiar localStorage
	
	//Estamos guardando objetos en localStorage
	usernameString = JSON.stringify(viejoNombre.innerHTML);
    window.localStorage.setItem("nuevoNombre", usernameString);

	imgUrlString = JSON.stringify(viejoUrl.src);
	window.localStorage.setItem("nuevoUrl", imgUrlString);

	ageString = JSON.stringify(viejaEdad.innerHTML);
	window.localStorage.setItem("nuevaEdad", ageString);

	genderString = JSON.stringify(viejoGenero.innerHTML);
	window.localStorage.setItem("nuevoGenero", genderString);

	countryString = JSON.stringify(viejoPais.innerHTML);
	window.localStorage.setItem("nuevoPais", countryString);
}

function exit(){
	let mainWindow = window.open('main.html');
	//mainWindow.location.reload(true);
	
	window.close();	
}
