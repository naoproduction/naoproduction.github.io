function showHome() {
	document.getElementById("home-text").style.visibility = "visible";
  }
  setTimeout("showHome()", 250); // aprés 25ms

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2200,
	reset: true
})

sr.reveal('.home-text',{delay:150, origin:'bottom'})
sr.reveal('.home-img',{delay:150, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact,.ftco-section',{delay:80, origin:'bottom'})
