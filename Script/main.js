import { skills } from "./skills.js";

//HTML of skill section 

let skillsHTML = '';

skills.forEach((skill) =>{
  skill = `
    <div class="col">
      <h5>${skill.name}</h5>
      <div class="stats"><p class="${skill.class}"></p></div>
    </div>
  `
  skillsHTML += skill;
});

document.querySelector('.js-skills-container').innerHTML = skillsHTML;