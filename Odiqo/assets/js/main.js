
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

// BURGER HANDLER START

(function () {
	const burgetItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuClouse = document.querySelector('.header__nav__close');
	burgetItem.addEventListener('click', () => {
		menu.classList.add('header__nav__active');
	});
	menuClouse.addEventListener('click', () => {
		menu.classList.remove('header__nav__active');
	});
}());

// BURGER HANDLER END