const projects = [
	{
		id: 1,
		thumbnail:
			'../../assets/movieapp.png',
		title: 'Movie App',
		demo: 'https://themoviedb-rust.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/Movie-App',
		category: 'reactjs',
	},
	{
		id: 2,
		thumbnail:
			'../../assets/DashUI.png',
		title: 'DashUI',
		demo: 'https://dashboard-swart-one-62.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/DashUI',
		category: 'reactjs',
	},
	{
		id: 3,
		thumbnail:
			'../../assets/gallary-hover.png',
		title: 'Gallary with zoom effect',
		demo: 'https://codepen.io/iamdineshbasnet/pen/ZEqJNqq',
		sourceCode: 'https://codepen.io/iamdineshbasnet/pen/ZEqJNqq',
		category: 'javascript',
	},
	{
		id: 4,
		thumbnail:
			'../../assets/calculator.png',
		title: 'Calculator',
		demo: 'https://codepen.io/iamdineshbasnet/pen/WNgggKP',
		sourceCode: 'https://codepen.io/iamdineshbasnet/pen/WNgggKP',
		category: 'javascript',
	},
	{
		id: 4,
		thumbnail:
			'../../assets/Registration-form.png',
		title: 'Registration Form',
		demo: 'https://codepen.io/iamdineshbasnet/pen/xxaaVea',
		sourceCode: 'https://codepen.io/iamdineshbasnet/pen/xxaaVea',
		category: 'css',
	},
	
];

$(document).ready(function () {
	let filter_groups = ['all'];
	let activeItem = 'all';

	// filter the list from projects based on category
	projects?.forEach((project) => {
		if (!filter_groups.includes(project.category)) {
			filter_groups.push(project.category);
		}
	});

	// filter the active tab item
	const handleFilter = function (group) {
		activeItem = group;

		// render the filter list on each update
		renderFilterList();
		renderProjectsList();
	};

	// map filter list
	const renderFilterList = function () {
		$('#portfolio .portfolio-tab-list ul').empty();

		filter_groups.forEach(function (group) {
			let li = $('<li class="portfolio-tab-item"></li>');
			let a = $('<a></a>')
				.text(group)
				.on('click', function () {
					handleFilter(group);
				});

			if (activeItem.toLowerCase() === group.toLowerCase()) {
				a.addClass('active');
			}

			li.append(a);
			$('#portfolio .portfolio-tab-list ul').append(li);
		});
	};

	renderFilterList();

	const renderProjectsList = function () {
		$('#portfolio .portfolio-content .card-wrapper').empty();

		// map project details in card
		projects.forEach(function (project) {
			if (
				activeItem.toLowerCase() === 'all' ||
				project.category === activeItem
			) {
				let card = $('<div class="card"></div>');
				let imageWrapper = $(
					'<div class="portfolio-image-wrapper"></div>'
				);
				let image = $('<img>')
					.attr('src', project?.thumbnail)
					.attr('alt', '');
				let actionWrapper = $('<div class="portfolio-action"></div>');
				let codeButton = $(
					'<a href="' +
						project?.sourceCode +
						'" target="_blank" class="portfolio-button">code</a>'
				);
				let demoButton = $(
					'<a href="' +
						project?.demo +
						'" target="_blank" class="portfolio-button">demo</a>'
				);

				actionWrapper.append(codeButton, demoButton);
				imageWrapper.append(image, actionWrapper);
				card.append(imageWrapper);

				let title = $(
					'<div class="portfolio-title"><p>' +
						project?.title +
						'</p></div>'
				);
				card.append(title);

				$('#portfolio .portfolio-content .card-wrapper').append(card);
			}
		});
	};

	renderProjectsList();
});
