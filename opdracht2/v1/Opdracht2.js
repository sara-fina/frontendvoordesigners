var bewegen = document.querySelector('.buttonright');
var carousel = document.querySelector('.carousel')
function verplaatsen() {
  carousel.classList.add("fotobeweeg");
	
}

bewegen.addEventListener('click', verplaatsen);

