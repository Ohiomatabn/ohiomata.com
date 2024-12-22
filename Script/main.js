import { skills } from "./skills.js";
import { projects } from "./recent_projects.js";

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

//HTML of the project section
let projectHTML = '';
projects.forEach((project) =>{
    project = `
        <a href="${project.link}" target="_blank"
            ><div class="project-1">
                <img src="images/${project.image}" alt="" />
                <div class="card">
                <h4>${project.name}</h4>
                <p>
                    ${project.text}
                </p>
                </div>
            </div></a
        >
    `
    projectHTML += project;
});

document.querySelector('.js-project-container').innerHTML = projectHTML;

const newDate = new Date();
const year = newDate.getFullYear();
document.querySelector('.current-year').innerHTML = year;
console.log(year);