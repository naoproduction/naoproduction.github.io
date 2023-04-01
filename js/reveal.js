function showHome() {
	document.getElementById("home-text").style.visibility = "visible";
  }
  setTimeout("showHome()", 250); // aprés 25ms

const srHome = ScrollReveal ({
	distance: '30px',
	duration: 1500,
	reset: true
})

srHome.reveal('.home-text',{delay:150, origin:'bottom'})
srHome.reveal('.home-img',{delay:150, origin:'right'})
