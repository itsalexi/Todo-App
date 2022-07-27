const DOMStuff = (() => {
  const addProject = function (title) {
    const project = document.createElement("li");
    project.classList.add("project");
    project.textContent = title;
    projectList.appendChild(project);
  };

  const selectProject = function (e) {
    selected = document.querySelector(".selected");
    selected.classList.toggle("selected");
    e.target.classList.toggle("selected");
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

  return { addProject, selectProject, getProjectElements, addProjectListener };
})();

module.exports = DOMStuff;
