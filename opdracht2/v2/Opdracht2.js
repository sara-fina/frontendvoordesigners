var bewegenterug = document.querySelector('.buttonleft');
var carouselterug = document.querySelector('.carousel');
var current = 1;

function terug() {
	carousel.classList.remove("fotobeweeg2");

}

bewegenterug.addEventListener('click', terug);



var bewegen = document.querySelector('.buttonright');
var carousel = document.querySelector('.carousel');
var current = 1;

function verplaatsen() {
	carousel.classList.add("fotobeweeg2");
}

bewegen.addEventListener('click', verplaatsen);


var foto = document.querySelector('.carousel')

var goright = document.querySelector('.buttonright');
var goleft = document.querySelector('.buttonleft');


document.onkeydown = function (event) {

	if (event.keyCode == 39) { //rechts
		current = current + 1;
		if (current == 2) { //laat 2e foto zien
			foto.classList.add("fotobeweeg2");
		} else if (current == 3) { //laat 3e foto zien
			foto.classList.add("fotobeweeg3");
		}

	}

	if (event.keyCode == 37) { //links
		current = current - 1;
		if (current == 2) { //terug naar foto1
			foto.classList.remove("fotobeweeg3");
		} else if (current == 1) { //terug naar foto2
			foto.classList.remove("fotobeweeg2");
		}

	}

}
