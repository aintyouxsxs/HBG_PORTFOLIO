ScrollReveal({
	reset: true,
	distance: '50px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.content h1, .front-img, .sub-title, h4, .contact-icons, .team', { origin: 'top' });
ScrollReveal().reveal('.content p, .about-img, .form-container, .lloyd', { origin: 'left' });
ScrollReveal().reveal('.about-content, .map, .jhavs', { origin: 'right' });
ScrollReveal().reveal('.services-list, .tables, .wilson', { origin: 'bottom' });

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navigation a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = set.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				link.classList.remove('after');
				document.querySelector('header navigation a[hfref*=' + id + ']').classList.add('after');
			});
		}
	});
};

/*============= remove toggle icon and navigation bar when click navbar link (scroll)========================*/

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


/*============= remove toggle icon and navigation bar when click navbar link (scroll)========================*/

let menuIcons	 = document.querySelector('#menu-icons');
let navigation = document.querySelector('.navigation');

menuIcons.onclick = () => {
	menuIcons.classList.toggle('fa-xmark');
	navigation.classList.toggle('active');
}

/*============= remove toggle icon and navigation bar when click navbar link (scroll)========================*/
menuIcons.classList.remove('fa=xmark');
navigation.classList.remove('active');