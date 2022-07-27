import Project from "./modules/project.js";
import DOMStuff from "./modules/dom.js";

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


DOMStuff.renderProjectList(projects);

projects = DOMStuff.getProjectElements();
// console.log(projects);
