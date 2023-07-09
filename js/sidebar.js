const menu_list = [
	{ id: 1, name: 'home', url: 'home', icon: 'home-outline' },
	{ id: 2, name: 'about me', url: 'about-me', icon: 'person-outline' },
	{ id: 3, name: 'portfolio', url: 'portfolio', icon: 'briefcase-outline' },
	{ id: 4, name: 'contact', url: 'contact', icon: 'mail-outline' },
];

$(document).ready(function () {
	// menu
	menu_list.forEach((item) => {
		const li = $(`<li class="item"></li>`);
		const anchor = $(`<a href="#${item.url}"></a>`);
		const icon = $(`<ion-icon name=${item.icon}></ion-icon>`);
		const text = $(`<span></span>`).text(item.name);
		anchor.append(icon, text);
		li.append(anchor);
		$('#page .main-menu .menu').append(li);
	});
	// mobile menu
	menu_list.forEach((item) => {
		const li = $(`<li class="item"></li>`);
		const anchor = $(`<a href="#${item.url}"></a>`).text(item.name);
		li.append(anchor);
		$('#mobile-menu ul').append(li);
	});

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
});
