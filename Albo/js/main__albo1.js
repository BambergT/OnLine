// BURGER HANDLER START

(function () {
  const burgetItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuClouse = document.querySelector('.header__nav__close');
  const menuLinks = document.querySelectorAll('.header_link')
  burgetItem.addEventListener('click', () => {
    menu.classList.add('header__nav__active');
  });
  menuClouse.addEventListener('click', () => {
    menu.classList.remove('header__nav__active');
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
      });
    };
  };
}());

// BURGER HANDLER END

document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});