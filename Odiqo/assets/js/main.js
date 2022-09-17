
// HEADER BACKGROUND ON FUNCTION START

(function () {
	const headert = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			headert.classList.add('header_active');
		} else {
			headert.classList.remove('header_active');
		}
	};
}());

// HEADER BACKGROUND ON FUNCTION END