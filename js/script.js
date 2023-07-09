$(document).ready(function () {

	//   homepage animation
	const animation = { duration: 5000, easing: (t) => t };
	const animationDelay = 5000;

	const slider = new KeenSlider('#type-animation', {
		loop: true,
		spacing: 0,
		defaultAnimation: {
			duration: 50000,
		},
		rubberband: true,
		detailsChanged: (s) => {
			s.slides.forEach((element, idx) => {
				element.style.opacity = s.track.details.slides[idx].portion;
			});
		},
		renderMode: 'custom',
		created(s) {
			setTimeout(() => {
				s.moveToIdx(2, true, animation);
			}, animationDelay);
		},
		updated(s) {
			setTimeout(() => {
				s.moveToIdx(s.track.details.abs + 2, true, animation);
			}, animationDelay);
		},
		animationEnded(s) {
			setTimeout(() => {
				s.moveToIdx(s.track.details.abs + 2, true, animation);
			}, animationDelay);
		},
	});

	
});
