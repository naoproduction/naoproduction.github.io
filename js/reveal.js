const sr = ScrollReveal ({
	distance: '45px',
	duration: 2200,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'bottom'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact,.ftco-section',{delay:130, origin:'bottom'})
