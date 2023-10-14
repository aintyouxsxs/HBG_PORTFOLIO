ScrollReveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.sub-title, .about-content2 h3, .about-content h3, .top', { origin: 'top' });
ScrollReveal().reveal('.about-content2, .about-img, .left, .center, #floor2', { origin: 'left' });
ScrollReveal().reveal('.about-content, .about-img2, .right, #centers, #floor1', { origin: 'right' });
ScrollReveal().reveal('.tables, .bottom', { origin: 'bottom' }); 