document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section');
	let currentSectionIndex = 0;

	document.getElementById('scrollButton').addEventListener('click', function () {
		currentSectionIndex = (currentSectionIndex + 1) % sections.length;
		sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
	});

	const fadeInElements = document.querySelectorAll('.fade-in');

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add('visible');
				}, index * 200); // Délai de 200ms entre chaque élément
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });

	fadeInElements.forEach(element => {
		observer.observe(element);
	});

	// Modal logic
	const modal = document.getElementById('myModal');
	const modalImg = document.getElementById('img01');
	const captionText = document.getElementById('caption');
	const images = document.querySelectorAll('.projet-img');
	const span = document.getElementsByClassName('close')[0];

	images.forEach(img => {
		img.addEventListener('click', function () {
			modal.style.display = 'block';
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		});
	});

	span.onclick = function () {
		modal.style.display = 'none';
	};
});

// Gestionnaire de soumission du formulaire de contact
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
	event.preventDefault(); // Empêche l'envoi du formulaire par défaut

	// Récupère les valeurs des champs du formulaire
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	// Affiche les valeurs dans la console (vous pouvez les envoyer à un serveur ici)
	console.log('Nom:', name);
	console.log('Email:', email);
	console.log('Message:', message);

	// Réinitialise le formulaire après soumission
	contactForm.reset();

	// Affiche un message de confirmation (vous pouvez personnaliser ceci)
	alert('Merci pour votre message !');
});

