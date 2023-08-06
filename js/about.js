import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
const about_me =
	'As a passionate Frontend Developer, I excel in JavaScript and Reactjs, crafting interactive and user-friendly web applications. My unwavering dedication drives me to stay updated with industry trends and best practices, ensuring top-notch results.';

const details = [
	{ id: 1, key: 'age', value: "April 7, 2004", type: 'age' },
	{ id: 2, key: 'residence', value: 'Nepal', type: 'text' },
	{ id: 3, key: 'address', value: 'Kathmandu', type: 'text' },
	{ id: 4, key: 'E-mail', value: 'iamdineshbasnet@gmail.com', type: 'email' },
	{ id: 5, key: 'phone', value: '+977 9895737707', type: 'phone' },
];

const information = [
	{
		id: 1,
		icon: 'desktop-outline',
		title: 'web Development',
		description:
			'Web development refers to the process of creating and building websites or web applications that are accessible through the internet. It involves a combination of designing, coding, and programming to bring a website to life and make it functional for users.',
	},
	{
		id: 2,
		icon: 'search-outline',
		title: 'SEO',
		description:
			'SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and rankings in search engine results. It involves strategies like keyword research, content optimization, and link building to attract organic traffic and drive business growth.',
	},
];

const testimonials = [
	{
		id: 1,
		name: 'Bibek Subedi',
		subtitle: 'CMO, Co-founder at Vrit Technogoloies',
		photo: './assets/1.png',
		text: 'An outstanding frontend developer student! His skills and dedication are commendable, making us proud as co-founders of the institute. Keep excelling! 🌟.',
	},
	{
		id: 2,
		name: 'Neeket Bhandari',
		subtitle: 'CEO at Meraki Tech',
		photo: './assets/placeholder.png',
		text: `I am truly amazed by our frontend developer's talent! With his exceptional skills in JavaScript and React, he elevate user experiences to new heights! 🚀`
	},
	{
		id: 3,
		name: 'Bibek Joshi',
		subtitle: 'Backend Developer at Meraki Tech',
		photo: './assets/2.jpeg',
		text: "His expertise in JavaScript and React is truly impressive, consistently delivering exceptional user experiences. A highly valuable addition to any team! 👏",
	},
	{
		id: 4,
		name: 'Neeraj Rawal',
		subtitle: 'Sr. Frontend Developer at Meraki Tech',
		photo: './assets/3.jpeg',
		text: `Impressed by this junior frontend developer's progress! His determination and willingness to take on challenges are commendable. A bright future lies ahead! 🔥`,
	},
	
	
];
const quoteIcon = `<svg width="35" height="26" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.9688 0H49.2188C45.3369 0 42.1875 3.16741 42.1875 7.07143V25.9286C42.1875 29.8326 45.3369 33 49.2188 33H60.9375V42.4286C60.9375 47.629 56.7334 51.8571 51.5625 51.8571H50.3906C48.4424 51.8571 46.875 53.4335 46.875 55.3929V62.4643C46.875 64.4237 48.4424 66 50.3906 66H51.5625C64.5117 66 75 55.4518 75 42.4286V7.07143C75 3.16741 71.8506 0 67.9688 0ZM25.7812 0H7.03125C3.14941 0 0 3.16741 0 7.07143V25.9286C0 29.8326 3.14941 33 7.03125 33H18.75V42.4286C18.75 47.629 14.5459 51.8571 9.375 51.8571H8.20312C6.25488 51.8571 4.6875 53.4335 4.6875 55.3929V62.4643C4.6875 64.4237 6.25488 66 8.20312 66H9.375C22.3242 66 32.8125 55.4518 32.8125 42.4286V7.07143C32.8125 3.16741 29.6631 0 25.7812 0Z" fill="#04B4E0"/>
</svg>`
$(document).ready(function () {
	// about me
	$('#about-me .section-content .row .left p').append(about_me);

	// details
	details?.forEach((detail) => {
		const li = $(`<li></li>`);
		const title = $(`<p class="title"></p>`).text(detail.key);

		let value;

		if (detail.type === 'email') {
			value = $(
				`<a  href="mailto:${detail.value}" class="value ${
					detail.type === 'email' && 'email'
				}"></a>`
			).text(detail.value);
		} else if (detail.type === 'phone') {
			value = $(`<a href="tel: ${detail.value}" class="value"></a>`).text(
				detail.value
			);
		} else if(detail.type === 'age'){
			const birthDate = new Date(detail.value);
			value = $(`<p class="value"></p>`).text(calculateAge(birthDate))
		}else {
			value = $(`<p class="value"></p>`).text(detail.value);
		}

		li.append(title, value);
		$('#about-me .section-content .row .right .info-list').append(li);
	});

	// what I do
	information.forEach((info) => {
		const info_block = $(`<div class="info-block"></div>`);

		// icon
		const icon_wrapper = $(`<div class="icon-wrapper"></div>`);
		const icon = $(`<ion-icon name=${info.icon} ></ion-icon>`);
		icon_wrapper.append(icon);

		// text
		const text = $(`<div class="text"></div>`);
		const info_title = $(`<h4></h4>`).text(info.title);
		const info_description = $(`<p></p>`).text(info.description);

		text.append(info_title, info_description);

		info_block.append(icon_wrapper, text);

		$('#about-me .info-block-wrapper').append(info_block);
	});

	// testimonial
	testimonials?.forEach((testimonial) => {
		// card
		const testimonial_card = $(`<div class="swiper-slide"></div>`);

		// card media
		const testimonial_image_wrapper = $(
			`<div class="testimonial-image-wrapper"></div>`
		);
		const image = $(
			`<img src=${testimonial.photo} alt=${testimonial.name} />`
		);
		testimonial_image_wrapper.append(image);

		// card content
		const testimonial_content = $(
			`	<div class="testimonial-content"></div>`
		);

		const testimonial_text = $(`<p class="testimonial-text"></p>`).text(
			testimonial.text
		);

		// card footer
		const testimonial_foo = $(`<div class="testimonial-foo"></div>`);
		const quote_author = $(`<div class="quote-author"></div>`);
		const name = $(`<h4></h4>`).text(testimonial.name);
		const subtitle = $(`<p></p>`).text(testimonial.subtitle);

		const quote_symbol = $(`<div class="quote-symbol">${quoteIcon}</div>`);
		quote_author.append(name, subtitle);
		testimonial_foo.append(quote_author, quote_symbol);
		testimonial_content.append(testimonial_text, testimonial_foo);

		testimonial_card.append(testimonial_image_wrapper, testimonial_content);
		$('.testimonial .testimonial-swiper .swiper .swiper-wrapper').append(
			testimonial_card
		);
	});

	// swiper
	const swiper = new Swiper(
		'#about-me .testimonial .testimonial-swiper .swiper',
		{
			loop: false,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			speed: 1000,
			spaceBetween: 30,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				300: {
					slidesPerView: 1,
				},
			},
		}
	);


	// function to calculate age
	function calculateAge(birthDate) {
		console.log(birthDate, 'birthdate')
		const birthYear = birthDate.getFullYear();
		const birthMonth = birthDate.getMonth();
		const birthDay = birthDate.getDate();

		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();
		const currentDay = currentDate.getDate();
	  
		let age = currentYear - birthYear;
	  
		if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
		  age--;
		}
	  
		return age;
	  }
  
});


