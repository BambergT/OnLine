// HEADER BACKGROUND ON FUNCTION START

(function () {
	const headert = document.querySelector('header');
  const headert__logo = document.querySelector('.logo')
	window.onscroll = () => {
		if (window.pageYOffset > 180) {
			headert.classList.add('header_active');
      headert__logo.classList.add('logo__active');
		} else {
			headert.classList.remove('header_active');
      headert__logo.classList.remove('logo__active');
		}
	};
}());

// HEADER BACKGROUND ON FUNCTION END

// HEADER BACKGROUND ON FUNCTION START



// HEADER BACKGROUND ON FUNCTION END

// ANIMATION CARDS START

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.card');
  let elements2 = document.querySelectorAll('.card2');
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of elements2) {
    observer.observe(elm);
  }


// ANIMATION CARDS END

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

// SMOOTH SCROLLING FUNCTION START

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// SMOOTH SCROLLING FUNCTION END