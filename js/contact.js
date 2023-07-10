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

	// validation
	$('#fullName').on('input', handleFullName);
	$('#email').on('input', handleEmail);
	$('#subject').on('input', handleSubject);
	$('#message').on('input', handleMessage);
	
	//   handle full name
	function handleFullName(e) {
		var errorMessage = $('.name-error')
		if (e.target.value.trim().length < 1) {
		  errorMessage.addClass('active');
		} else if(!isValidFullName(e.target.value)){
			errorMessage.text('Enter a valid name.').addClass('active')

		} else {
		  errorMessage.removeClass('active');
		}
	  }

	  function isValidFullName(fullName) {
		var fullNameRegex = /^[a-zA-Z\s'-]+$/;
		return fullNameRegex.test(fullName);
	  }
	  
	  // handle Email
	  function handleEmail() {
		var emailInput = $(this);
		var emailValue = emailInput.val().trim();
		var errorMessage = $('.email-error')
	  
		if (emailValue === '') {
		  errorMessage.text('Email is required.').addClass('active');
		} else if (!isValidEmail(emailValue)) {
		  errorMessage.text('Enter a valid email.').addClass('active');
		} else {
		  errorMessage.removeClass('active');
		}
	  }
	  
	  function isValidEmail(email) {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	  }
	  
	//   handle subject
	function handleSubject(e){
		var errorMessage = $('.subject-error')
		if (e.target.value.trim().length < 1) {
		  errorMessage.addClass('active');
		} else {
		  errorMessage.removeClass('active');
		}
	}
	//   handle message
	function handleMessage(e){
		var errorMessage = $('.message-error')
		if (e.target.value.trim().length < 1) {
		  errorMessage.addClass('active');
		} else {
		  errorMessage.removeClass('active');
		}
	}	
});
