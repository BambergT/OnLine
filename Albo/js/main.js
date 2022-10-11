// СЛАЙД-ШОУ

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// СЛАЙД-ШОУ КОНЕЦ


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