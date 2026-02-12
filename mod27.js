function goToSection(section){
	const scroll = section.id+"-section";
	document.getElementById(scroll).scrollIntoView(true);
}

function openMenu() {
  const menu = document.getElementById('menu-options')
  menu.classList.toggle('is-active')
}

AOS.init();