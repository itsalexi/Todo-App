const Project = require("./modules/project.js");
const DOMStuff = require("./modules/dom.js");

let projects = [];

function createProject(title, desc) {
  const index = projects.length;
  const project = new Project(title, desc, index);
  projects.push(project);
}

// Everytime we add a project, we want to use renderProjectList();
createProject("Test", "desc");
createProject("Test", "desc");
createProject("Test", "desc");
createProject("Test", "desc");
createProject("Test", "desc");
createProject("Test", "desc");


DOMStuff.renderProjectList(projects);

// DOMStuff.testSomething();
// console.log(projects);

function getProjects() {
  return projects;
}
export { getProjects, createProject };
