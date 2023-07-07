$(document).ready(function () {
	// Handling the click events
	$('.main-menu .menu .item').on('click', function () {
		$('.main-menu .menu .item').removeClass('active');
		$(this).addClass('active');

		// Remove 'active' class from all pages
		$('.content-area .content').removeClass('active');

		const pageToShow = $(this).find('a').attr('href');
		const selectedPage = $(pageToShow);

		// Add 'active' class to the selected page
		selectedPage.addClass('active');
	});

	// Check window.location.hash and activate corresponding menu item and page
	const hash = window.location.hash;
	if (hash) {
		$('.main-menu .menu .item a').each(function () {
			const href = $(this).attr('href');
			if (href === hash) {
				const menuItem = $(this).parent();
				const page = $(hash);

				menuItem.addClass('active');
				page.addClass('active');

				return false; // Exit the loop after finding a match
			}
		});
	}

	// Handling the click events for mobile menu items
	$('.mobile-menu ul .item a').on('click', function () {
		$('.mobile-menu ul .item a').removeClass('active');
		$(this).addClass('active');
		$('header').removeClass('active');
		$('.toggle-menu .menu-icon-wrapper .bar').removeClass('close');
		// Remove 'active' class from all pages
		$('.content-area .content').removeClass('active');

		const pageToShow = $(this).attr('href');
		const selectedPage = $(pageToShow);

		// Add 'active' class to the selected page
		selectedPage.addClass('active');
	});

	if (hash) {
		$('.mobile-menu ul .item a').each(function () {
			const href = $(this).attr('href');
			if (href === hash) {
				const menuItem = $(this);
				const page = $(hash);

				menuItem.addClass('active');
				page.addClass('active');

				return false;
			}
		});
	}

	// toggle header
	$('.toggle-menu .menu-icon-wrapper').on('click', function () {
		$('header').toggleClass('active');
		$('.toggle-menu .menu-icon-wrapper .bar').toggleClass('close');
	});

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
