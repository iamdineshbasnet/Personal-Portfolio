const projects = [
	{
		thumbnail:
			'../../assets/Registration-form.png',
		title: 'Registration Form',
		demo: 'https://codepen.io/iamdineshbasnet/pen/xxaaVea',
		sourceCode: 'https://codepen.io/iamdineshbasnet/pen/xxaaVea',
		category: 'css',
		isActive: false,
	},
	{

		thumbnail:
		'../../assets/gallary-hover.png',
		title: 'Gallary with zoom effect',
		demo: 'https://codepen.io/iamdineshbasnet/pen/ZEqJNqq',
		sourceCode: 'https://codepen.io/iamdineshbasnet/pen/ZEqJNqq',
		category: 'javascript',
		isActive: true,
	},
	{
		thumbnail:
			'../../assets/panipuri.png',
			title: 'Pani Puri Game',
		demo: 'https://pani-puri-game.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/Pani-Puri-Game',
		category: 'game',
		isActive: true,
	},
	{
		thumbnail:
		'../../assets/movieapp.png',
		title: 'Movie App',
		demo: 'https://themoviedb-rust.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/Movie-App',
		category: 'reactjs',
		isActive: true,
	},
	{
		thumbnail:
		'../../assets/DashUI.png',
		title: 'DashUI',
		demo: 'https://dashboard-swart-one-62.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/DashUI',
		category: 'reactjs',
		isActive: true,
	},
	{
		thumbnail:
			'../../assets/calculator-app.png',
		title: 'Calculator',
		demo: 'https://calculator-jade-psi.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/HTML-CSS-JS',
		category: 'javascript',
		isActive: true,
	},
	{
		thumbnail:
			'../../assets/Todo.png',
		title: 'Todo App',
		demo: 'https://todos-app-with-js.vercel.app/',
		sourceCode: 'https://github.com/iamdineshbasnet/Todos-App-With-JS',
		category: 'javascript',
		isActive: true,
	},
	{
		thumbnail:
			'../../assets/Analog-Clock.png',
			title: 'Analog Clock',
			demo: 'https://analog-clock-nine-virid.vercel.app/',
			sourceCode: 'https://github.com/iamdineshbasnet/HTML-CSS-JS',
			category: 'javascript',
			isActive: false,
	},

	
];

$(document).ready(function () {
	let filter_groups = ['all'];
	let activeItem = 'all';

	// filter the list from projects based on category
	projects?.forEach((project) => {
		if (!filter_groups.includes(project.category) && project.isActive) {
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
				(activeItem.toLowerCase() === 'all' ||
				project.category === activeItem) && (project.isActive)
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
