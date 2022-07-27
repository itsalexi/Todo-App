const Project = require("./modules/project.js");
const DOMStuff = require("./modules/dom.js");

let projects = [];

function createProject(title, desc) {
  console.log(`${title} ${desc}`);
  const index = projects.length;
  const project = new Project(title, desc, index);
  projects.push(project);
  DOMStuff.renderProjectList(projects);
}

// Everytime we add a project, we want to use renderProjectList();
createProject(
  "Cool project",
  "One of my cool projects, currently work in progress"
);
createProject("Wow another one", "Sickkkk");

// DOMStuff.testSomething();
// console.log(projects);

function getProjects() {
  return projects;
}
export { getProjects, createProject };
