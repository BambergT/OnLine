
// HEADER BACKGROUND ON FUNCTION START

(function () {
	const headert = document.querySelector('header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			headert.classList.add('header__active');
		} else {
			headert.classList.remove('header__active');
		}
	};
}());

// HEADER BACKGROUND ON FUNCTION END

// BURGER HANDLER START

(function () {
	const burgetItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuClouse = document.querySelector('.header__nav__close');
	const menuLinks = document.querySelectorAll('.header__link')
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
        const headerElHeight =  document.querySelector('header').clientHeight;
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




 document.addEventListener('DOMContentLoaded', function () {
      // конечная дата
      const deadline = new Date(2022, 9, 31);
      // id таймера
      let timerId = null;
      // склонение числительных
      function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
      }
      // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
      function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
          clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        // const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        // $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
       $days.dataset.title = declensionNum(days, ['Days', 'Days', 'Days']);
       $hours.dataset.title = declensionNum(hours, ['Hours', 'Hours', 'Hours']);
       $minutes.dataset.title = declensionNum(minutes, ['Minu', 'Min', 'Min']);
        // $seconds.dataset.title = declensionNum(seconds, ['seconds', 'seconds', 'seconds']);
      }
      // получаем элементы, содержащие компоненты даты
      const $days = document.querySelector('.timer__days');
      const $hours = document.querySelector('.timer__hours');
      const $minutes = document.querySelector('.timer__minutes');
      // const $seconds = document.querySelector('.timer__seconds');
      // вызываем функцию countdownTimer
      countdownTimer();
      // вызываем функцию countdownTimer каждую секунду
      timerId = setInterval(countdownTimer, 1000);
    });




















