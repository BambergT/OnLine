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


/*  СПИСОК НАЧАЛО  */
var block = document.querySelector('body');

var link1 = document.querySelector('.link__img1');
var link2 = document.querySelector('.link__img2');
var link3 = document.querySelector('.link__img3');
var link4 = document.querySelector('.link__img4');
var link5 = document.querySelector('.link__img5');
var link6 = document.querySelector('.link__img6');

link1.addEventListener('mouseenter', function () {
  block.classList.add('add__img1');
});
link1.addEventListener('mouseleave', function () {
  block.classList.remove('add__img1');
});

link2.addEventListener('mouseenter', function () {
  block.classList.add('add__img2');
});
link2.addEventListener('mouseleave', function () {
  block.classList.remove('add__img2');
});

link3.addEventListener('mouseenter', function () {
  block.classList.add('add__img3');
});
link3.addEventListener('mouseleave', function () {
  block.classList.remove('add__img3');
});

link4.addEventListener('mouseenter', function () {
  block.classList.add('add__img4');
});
link4.addEventListener('mouseleave', function () {
  block.classList.remove('add__img4');
});

link5.addEventListener('mouseenter', function () {
  block.classList.add('add__img5');
});
link5.addEventListener('mouseleave', function () {
  block.classList.remove('add__img5');
});

link6.addEventListener('mouseenter', function () {
  block.classList.add('add__img6');
});
link6.addEventListener('mouseleave', function () {
  block.classList.remove('add__img6');
});

/*  СПИСОК КОНЕЦ  */











