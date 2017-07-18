function load_ajax(){
	var xmlhttp;

	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");

	}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("results").innerHTML = xmlhttp.responseText;
			// xmlhttp = xmlhttp.responseText;
			// JSON.parse(xmlhttp.responseText);
		}
	};
	xmlhttp.open("GET", "../template/product.json");
	xmlhttp.send();

}
