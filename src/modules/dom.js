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
    const projectList = document.querySelector(".projectList");
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
    const projects = main.getProjects();
    const project_content = document.querySelector(".project-content");
    const project_info = document.createElement("div");
    project_info.classList.add("project-info");
    project_content.appendChild(project_info);

    // Info
    const info = document.createElement("div");
    info.classList.add("info");
    project_info.appendChild(info);
    const info_title = document.createElement("p");
    const info_desc = document.createElement("p");
    info_title.classList.add("info-title");
    info_desc.classList.add("info-desc");

    info_title.textContent = projects[project].title;
    info_desc.textContent = projects[project].desc;

    info.appendChild(info_title);
    info.appendChild(info_desc);

    //Edit div
    const edit = document.createElement("edit");
    edit.classList.add("edit");
    edit.textContent = "Edit";

    project_info.appendChild(edit);

    // Tasks
    const task_container = document.createElement("div");
    task_container.classList.add("task-container");
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    task_container.appendChild(tasks);
    project_content.appendChild(task_container);
    renderTasks(projects, project);
  };

  const addProjectFromModal = function (title, desc) {
    main.createProject(title, desc);
  };

  const renderTasks = function (projects, index) {
    const tasks = projects[index].tasks;
    const taskDOM = document.querySelector(".tasks");
    for (task in tasks) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskDOM.appendChild(taskElement);
      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      const checkbox = document.createElement("div");
      checkbox.classList.add("checkbox");
      const taskName = document.createElement("p");
      taskName.classList.add("taskName");
      taskElement.appendChild(taskInfo);
      taskInfo.appendChild(checkbox);
      taskName.textContent = tasks[task].title;
      taskInfo.appendChild(taskName);
      const taskDue = document.createElement("p");
      taskDue.classList.add("timedue");
      taskElement.appendChild(taskDue);
      taskDue.textContent = tasks[task].dueDate;
    }
  };

  // MODALS

  const modal = document.querySelector(".modal");

  const modalButton = document.getElementById("addModal");
  const cancelButton = document.getElementById("cancelModal");
  const modalForm = document.getElementById("modalForm");

  modalButton.onclick = function () {
    modal.style.display = "flex";
  };

  cancelButton.onclick = function () {
    modal.style.display = "none";
  };

  modalForm.addEventListener("submit", (e) => {
    const titleInput = document.getElementById("titleInput").value;
    const descInput = document.getElementById("descInput").value;
    e.preventDefault();
    addProjectFromModal(titleInput, descInput);
  });

  return {
    addProject,
    selectProject,
    getProjectElements,
    addProjectListener,
    renderProjectList,
    renderProject,
  };
})();

module.exports = DOMStuff;
