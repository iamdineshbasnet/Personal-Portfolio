import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const text = ['Frontend Developer', 'Web Developer']

$(document).ready(function () {
	
	if(!window.location.hash){
		window.location.href ='/index.html#home'
	}

	text.forEach((txt)=>{
		const swiper_slide = $(`<h4 class="swiper-slide"></h4>`).text(txt)

		$('.home-swiper .swiper-wrapper').append(swiper_slide)

	})

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
});
