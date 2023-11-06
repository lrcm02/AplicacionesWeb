window.onload = function(){
    console.log("Pagina cargo correctamente");
    
    updateData();
}

function openMod(){
	console.log("Crear");
	window.open('modifyProfile.html');	
	
	window.close();
}

function updateData(){
	nombreString2 = window.localStorage.getItem('nuevoNombre'); 
	username2 = JSON.parse(nombreString2);

	viejoNombre = document.getElementById('nombre');
	viejoNombre.innerHTML = username2;

	urlString2 = window.localStorage.getItem('nuevoUrl'); 
	imgUrl2 = JSON.parse(urlString2);
	viejoUrl = document.getElementById('uErreEle');
	viejoUrl.src = imgUrl2;
	
	edadString2 = window.localStorage.getItem('nuevaEdad');
	age2 = JSON.parse(edadString2);
	viejaEdad = document.getElementById('edad');
	viejaEdad.innerHTML = age2;
	
	generoString2 = window.localStorage.getItem('nuevoGenero');
	gender2 = JSON.parse(generoString2);
	viejoGenero = document.getElementById('genero');
	viejoGenero.innerHTML = gender2;
	
	paisString2 = window.localStorage.getItem('nuevoPais');
	country2 = JSON.parse(paisString2);
	viejoPais = document.getElementById('pais');
	viejoPais.innerHTML = country2;

	console.log(username2 + " -- " + imgUrl2 + " -- " + age2 + " -- " + gender2 + " -- " + country2);

}
