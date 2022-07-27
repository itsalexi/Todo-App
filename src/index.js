import Project from "./modules/project.js";
import DOMStuff from "./modules/dom.js";

let projects = [];

for (project in projects) {
  DOMStuff.addProject(projects[project].title);
}

console.log(DOMStuff);
DOMStuff.addProjectListener();
DOMStuff.addProject("Stupid");
projects = DOMStuff.getProjectElements();
// console.log(projects);
