console.log('Hola Mundo');

// Mostrar alerta al dar click en el logo
function mostrarMensajeInicial() {
	if (confirm('Este sitio está en desarrollo, disculpe las molestias.')) {
		alert('Gracias por visitarnos!');
	} else {
		alert('...');
	}
}

// Funcionalidad botón flotante
document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopButton = document.getElementById('btn-ir-arriba');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	});

	scrollToTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});

// Funcionalidad galeria overlay
const galeriaImagenes = document.querySelectorAll('.galeria-img');
const overlay = document.querySelector('.galeria-overlay');
const overlayImagen = document.querySelector('.galeria-overlay-img');

galeriaImagenes.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		overlayImagen.src = imagen.src;
		overlay.style.display = 'flex';
	});
});

overlay.addEventListener('click', () => {
	overlay.style.display = 'none';
	overlayImagen.src = '';
});

// Formulario de contacto
const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const mensaje = document.getElementById('mensaje').value;

	alert(
		'Gracias por contactarnos - Nombre: ' +
			nombre +
			'- Email: ' +
			email +
			'- Mensaje: ' +
			mensaje
	);

	contactoForm.reset();
});
