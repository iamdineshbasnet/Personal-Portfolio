const contact_list = [
	{
		id: 1,
		icon: 'location-outline',
		title: 'Kathmandu, Nepal',
		type: 'text',
	},
	{
		id: 2,
		icon: 'call-outline',
		title: '+977 9825737707',
		url: '9825737707',
		type: 'phone',
	},
	{
		id: 3,
		icon: 'mail-open-outline',
		title: 'iamdineshbasnet@gmail.com',
		url: 'iamdineshbasnet@gmail.com',
		type: 'email',
	},
	{
		id: 4,
		icon: 'checkmark-circle-outline',
		title: 'Freelance Available',
		type: 'text',
	},
];

$(document).ready(function () {

    
	// map the contact list
	contact_list.forEach(function (item) {
		let contact_card = $('<div class="contact-card"></div>');
		let icon_wrapper = $('<h6 class="contact-icon"></h6>');
		let icon = $(`<ion-icon name=${item.icon}></ion-icon>`);
		let text;

		if (item.type === 'phone') {
			text = $(
				`<a href="tel:${item.title}" class="contact-text"></a>`
			).text(item.title);
		} else if (item.type === 'email') {
			text = $(
				`<a href="mailto:${item.title}" class="contact-text"></a>`
			).text(item.title);
		} else {
			text = $('<p class="contact-text"></p>').text(item.title);
		}

		icon_wrapper.append(icon);
		contact_card.append(icon_wrapper, text);

		$('#contact .contact-content .left').append(contact_card);
	});
});
