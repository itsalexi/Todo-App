const DOMStuff = (() => {
  const addProject = function (title, index) {
    const projectList = document.querySelector(".projectList");
    const project = document.createElement("li");
    project.dataset.index = index;
    project.classList.add("project");
    project.textContent = title;
    projectList.appendChild(project);
    addProjectListener();
  };

  const selectProject = function (e) {
    try {
      selected = document.querySelector(".selected");
      selected.classList.toggle("selected");
    } finally {
      e.target.classList.toggle("selected");
      resetProjectContent();
    }
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
  };

  return {
    addProject,
    selectProject,
    getProjectElements,
    addProjectListener,
    renderProjectList,
  };
})();

module.exports = DOMStuff;
