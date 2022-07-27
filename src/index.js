const Project = require("./modules/project.js");
const DOMStuff = require("./modules/dom.js");

let defaultList = [];
let projects = localStorage.getItem("projectList");
projects = JSON.parse(projects || JSON.stringify(defaultList));

let parsedProjects = [];

for (let project in projects) {
  createProject(
    projects[project].title,
    projects[project].desc,
    projects[project].tasks
  );
}

console.log(parsedProjects);
function createProject(title, desc, tasks) {
  const index = parsedProjects.length;
  const project = new Project(title, desc, index, tasks);
  parsedProjects.push(project);
  DOMStuff.renderProjectList(parsedProjects);
  saveToLocalStorage();
}

function createTask(project, title, date) {
  parsedProjects[project].addTask(title, date);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("projectList", JSON.stringify(parsedProjects));
}

DOMStuff.renderProjectList(parsedProjects);

function getProjects() {
  return parsedProjects;
}
export { getProjects, createProject, createTask };
