function showHome() {
	document.getElementById("home__text").style.visibility = "visible";
  }
  setTimeout("showHome()", 250); // aprés 25ms

const sr = ScrollReveal ({
	distance: '30px',
	duration: 1500,
	reset: true
})

sr.reveal('.home__text',{delay:250, origin:'bottom'})


