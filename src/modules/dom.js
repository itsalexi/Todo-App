const main = require("../index.js");

const DOMStuff = (() => {
  const addProject = function (title, index) {
    const projectList = document.querySelector(".projectList");
    const project = document.createElement("li");
    project.dataset.index = index;
    project.classList.add("project");
    project.textContent = title;
    projectList.appendChild(project);
  };

  const selectProject = function (e) {
    if (!document.querySelector(".selected")) {
      e.target.classList.toggle("selected");
    } else {
      selected = document.querySelector(".selected");
      selected.classList.toggle("selected");
      e.target.classList.toggle("selected");
    }
    resetProjectContent();
    renderProject(e.target.dataset.index);
  };

  const getProjectElements = function () {
    return document.querySelectorAll(".project");
  };

  const addProjectListener = function () {
    const projectList = document.querySelectorAll(".project");

    projectList.forEach((project) => {
      project.addEventListener("click", (e) => selectProject(e));
    });
  };

  const resetProjectContent = function () {
    const project_content = document.querySelector(".project-content");
    project_content.innerHTML = "";
  };

  const resetProjectList = function () {
    const projectList = document.querySelectorAll(".projectList");
    projectList.innerHTML = "";
  };

  const renderProjectList = function (projects) {
    resetProjectList();
    for (project in projects) {
      addProject(projects[project].title, projects[project].index);
    }
    addProjectListener();
  };

  const renderProject = function (project) {
    console.log(project);
  };

  //   const testSomething = function () {
  //     console.log(main.getProjects());
  //     main.createProject("another one", "cool");
  //     console.log(main.getProjects());
  //   };

  return {
    addProject,
    selectProject,
    getProjectElements,
    addProjectListener,
    renderProjectList,
    renderProject,
    // testSomething,
  };
})();

module.exports = DOMStuff;
