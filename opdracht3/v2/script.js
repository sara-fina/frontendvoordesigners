var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');
var button = document.querySelector("button");
var loading = document.querySelector(".loader");
var filter = document.querySelector('.filter');
console.log("section", section);


//json laden enzo

function laadJson() {
	var request = new XMLHttpRequest();
	request.open('get', uri);
	request.responseType = 'json';
	request.send();
	console.log("loadimagesmetXHR", request);

	//als json is geladen dan wordt dexe listener aangeroepen
	request.addEventListener("load", function () {
		setTimeout(function () {

			loading.classList.remove('show');

			var data = request.response;
			console.log("request is geladen: ", request.response);

			//roep een functie die html elementen aanmaakt en daar de json data in stopt
			maakhtml(data);

		}, 1300)
	});
}

button.onclick = function () {
	loading.classList.add('show');
	this.classList.add('hide'); //button mag weg
	section.innerHTML = "";
	laadJson();
}

function openButton() {
	filter.classList.add('active');

}

button.addEventListener('click', openButton);

document.onkeydown = function (filters) {
	if (filters.keycode == 77) {

		filter.classList.add("active");
	}
}

document.onkeydown = function (event) {

	if (event.keyCode == 77) { //letter M
		var request = new XMLHttpRequest();
		request.open('get', uri);
		request.responseType = 'json';
		request.send();


		//als json is geladen dan wordt dexe listener aangeroepen
		request.addEventListener("load", function () {
		
			setTimeout(function () {

			loading.classList.remove('show'); 
				
			var data = request.response;
			console.log("request is geladen: ", request.response);

			//roep een functie die html elementen aanmaakt en daar de json data in stopt
			maakhtml(data);
 
}, 1500)
		});
    loading.classList.add('show');
	button.classList.add('hide'); //button mag weg
	section.innerHTML = "";
	laadJson();

	}
	

}


function maakhtml(jsondata) {
	var film = jsondata;

	console.log("films?", film.length)
	for (var i = 0; i < film.length; i++) {


		//html elementen per film 
		var myArticle = document.createElement('article'); //elke film een article

		var myimg = document.createElement('img');
		var myH2 = document.createElement('h2');
		var myH3 = document.createElement('h3');
		var myPara1 = document.createElement('p');



		//json data laden oper film

		myimg.setAttribute("src", film[i].cover)
		myH2.textContent = film[i].title;
		myH3.textContent = 'Genre: ' + film[i].genres;
		myPara1.textContent = 'Plot: ' + film[i].plot;


		//html elementenr koppelen per film
		myArticle.appendChild(myH2);
		myArticle.appendChild(myH3);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myimg);
		section.appendChild(myArticle);

	} //end for loop

}

var toTop = document.querySelector('.scrolltop');

function topScroll() {
	window.scrollTo(0, 0);
}

toTop.onclick = function () {
	topScroll();

}
