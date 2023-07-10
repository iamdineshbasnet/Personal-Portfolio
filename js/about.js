import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
const about_me =
	'I am a passionate Frontend Developer who specializes in JavaScript and Reactjs. I have a strong dedication to building interactive and user-friendly web applications. I constantly update my skills to stay connect with industry trends and best practices.';

const details = [
	{ id: 1, key: 'age', value: '19', type: 'text' },
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
	
];

const testimonials = [
	{
		id: 1,
		name: 'Julia Hickman',
		subtitle: 'Frontend Developer',
		photo: 'https://wisehealthynwealthy.com/wp-content/uploads/2022/01/CreativecaptionsforFacebookprofilepictures.jpg',
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,',
	},
	{
		id: 2,
		name: 'Monte Luke',
		subtitle: 'Photographer',
		photo: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG',
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,',
	},
	{
		id: 3,
		name: 'Monte Luke',
		subtitle: 'Photographer',
		photo: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG',
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,',
	},
	{
		id: 4,
		name: 'Monte Luke',
		subtitle: 'Photographer',
		photo: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG',
		text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus debitis inventore,',
	},
];

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
		} else {
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

		const quote_symbol = $(`<div class="quote-symbol"></div>`);
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
});
