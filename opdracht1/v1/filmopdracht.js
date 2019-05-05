var opslaan = document.querySelector('.save');



function saving() {
	
  opslaan.classList.add("saved");
}

opslaan.addEventListener('click', saving);


var hartje = document.querySelector('.hearticon');



function addOpslaan() {
	
  hartje.classList.add("heart");
}

opslaan.addEventListener('click', addOpslaan);