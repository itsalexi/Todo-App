const Project = require("./modules/project.js");
const DOMStuff = require("./modules/dom.js");

let projects = [];

function createProject(title, desc) {
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

projects[0].addTask("Test Task", "YYYY-MM-DD");
projects[0].addTask("Another Test Task", "YYYY-MM-DD");
projects[0].addTask("How About One More Test Task", "YYYY-MM-DD");

projects[1].addTask("This one deserves", "YYYY-MM-DD");
projects[1].addTask("Some test tasks", "YYYY-MM-DD");
projects[1].addTask("Too, doesn't he?", "YYYY-MM-DD");
// DOMStuff.testSomething();
// console.log(projects);

function getProjects() {
  return projects;
}
export { getProjects, createProject };
