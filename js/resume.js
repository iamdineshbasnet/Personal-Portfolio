const coding_skills = [
    {id: 1, name: 'HTML/CSS', value: '80'},
    {id: 4, name: 'jQuery', value: '70'},
    {id: 2, name: 'Javascript', value: '75'},
    {id: 3, name: 'Reactjs', value: '85'},

]

$(document).ready(function(){

    coding_skills.forEach((skill)=>{
        const skills_content = $(`<div class="skills-content"></div>`)
        const top_content = $(`<div class="top-content"></div>`)
        const skills_name = $(`<h4 class="skills-name"></h4>`).text(skill.name)
        const skills_value = $(`<p class="skills-value"></p>`).text(skill.value + '%')
        top_content.append(skills_name, skills_value)
        
        const bottom_content =  $(`<div class="bottom-content"></div>`)
        const skills_progress_bar = $(`<div class="skills-progress-bar" style="width: ${skill.value}%"></div>`)
        bottom_content.append(skills_progress_bar)
        
        skills_content.append(top_content, bottom_content)



        $('.skills-content-wrapper').append(skills_content)

    })

})