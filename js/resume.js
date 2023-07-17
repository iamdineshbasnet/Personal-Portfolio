const coding_skills = [
	{ id: 1, name: 'HTML/CSS', value: '90' },
	{ id: 2, name: 'Javascript', value: '75' },
	{ id: 4, name: 'jQuery', value: '80' },
	{ id: 3, name: 'Reactjs', value: '85' },
];

const knowledges = [
	'HTML',
	'CSS',
	'Javascript',
	'Typescript',
	'Reactjs',
	'Nextjs',
	'Redux',
	'Material UI',
	'Tailwind CSS',
	'Git',
	'Formik',
	'Bootstrap',
	'jQuery',
	'GSAP',
];
const certificate_list = [
	{
		title: 'Frontend Development',
		membershipId: 'VRITREACT011820',
		date: '07 Feb 2023',
		name: 'Vrit Tech',
		image: '../assets/certificate1.png',
	},
];
$(document).ready(function () {
	coding_skills.forEach((skill) => {
		const skills_content = $(`<div class="skills-content"></div>`);
		const top_content = $(`<div class="top-content"></div>`);
		const skills_name = $(`<h4 class="skills-name"></h4>`).text(skill.name);
		const skills_value = $(`<p class="skills-value"></p>`).text(
			skill.value + '%'
		);
		top_content.append(skills_name, skills_value);

		const bottom_content = $(`<div class="bottom-content"></div>`);
		const skills_progress_bar = $(
			`<div class="skills-progress-bar" style="width: ${skill.value}%"></div>`
		);
		bottom_content.append(skills_progress_bar);

		skills_content.append(top_content, bottom_content);

		$('.skills-content-wrapper').append(skills_content);
	});

	knowledges.forEach((knowledge) => {
		const knowledge_button = $(`<div class="knowledge-button"></div>`);
		const text = $(`<p></p>`).text(knowledge);

		knowledge_button.append(text);

		$('.knowledges-content-wrapper').append(knowledge_button);
	});

	certificate_list.forEach((item) => {
		const link = $(`<a href=${item.image} download></a>`);
		const certificate_card = $(`<div class="certificate-card"></div>`)
		const left = $(`<div class="left"></div>`)
		const name = $(`<p></p>`).text(item.name)
		const right = $(`<div class="right"></div>`)
		const certificate_title =$(`<h4 class="certificate-title"></h4>`).text(item.title)
		const certificate_membership_id = $(`<p class="certificate-membership-id">Membership id:  <span>${item.membershipId}</span></p>`)
		const certificate_date = $(`<p class="certificate-date"></p>`).text(item.date)

		left.append(name)
		right.append(certificate_title, certificate_membership_id, certificate_date)
		certificate_card.append(left, right)
		link.append(certificate_card)
		$('.certificate-wrapper').append(link)
	});
});
