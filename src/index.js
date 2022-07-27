const Project = require("./modules/project.js");
const DOMStuff = require("./modules/dom.js");

let projects = [];

function createProject(title, desc) {
  const index = projects.length;
  const project = new Project(title, desc, index);
  projects.push(project);
  DOMStuff.renderProjectList(projects);
}

function createTask(project, title, date) {
  projects[project].addTask(title, date);
}
// Everytime we add a project, we want to use renderProjectList();
createProject(
  "Cool project",
  "One of my cool projects, currently work in progress"
);
createProject("Wow another one", "Sickkkk");

createTask(0, "Test Task", "YYYY-MM-DD");
createTask(0, "Another Test Task", "YYYY-MM-DD");
createTask(0, "How About One More Test Task", "YYYY-MM-DD");

createTask(1, "This one deserves", "YYYY-MM-DD");
createTask(1, "Some test tasks", "YYYY-MM-DD");
createTask(1, "Too, doesn't he?", "YYYY-MM-DD");

// DOMStuff.testSomething();
// console.log(projects);

function getProjects() {
  return projects;
}
export { getProjects, createProject, createTask };
