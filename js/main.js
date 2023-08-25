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
