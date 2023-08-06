import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const text = ['Frontend Developer', 'Web Developer'];

$(document).ready(function () {
	
	const protocol = window.location.protocol
	const host = window.location.host
	const pathName = window.location.pathname

	if (window.location.href === `${protocol}//${host}${pathName}`) {
		window.location.href = '/#home';
	}

	text.forEach((txt) => {
		const swiper_slide = $(`<h4 class="swiper-slide"></h4>`).text(txt);

		$('.home-swiper .swiper-wrapper').append(swiper_slide);
	});

	const swiper = new Swiper('.subtitle .home-swiper', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		speed: 2000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		grabCursor: true,
		disableOnInteraction: false,
	});



	// content slder
	const contentSlider = new Swiper('.content-area', {
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		on: {
		  slideChangeTransitionStart: function () {
			const activeSlide = this.slides[this.activeIndex];
			const creativeEffects = ['fade-in-effect', 'fade-out-effect', 'flip-effect', 'rotate-effect', 'turn-effect'];
			const randomEffect = creativeEffects[Math.floor(Math.random() * creativeEffects.length)];
			activeSlide.classList.add(randomEffect);
		  },
		  slideChangeTransitionEnd: function () {
			const previousSlide = this.slides[this.previousIndex];
			const creativeEffects = ['fade-in-effect', 'fade-out-effect', 'flip-effect', 'rotate-effect', 'turn-effect'];
			previousSlide.classList.remove(...creativeEffects);
		  }
		},
	  });
});
