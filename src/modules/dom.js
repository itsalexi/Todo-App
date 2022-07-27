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
    console.log(projects);
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

    // Tasks
    const task_container = document.createElement("div");
    task_container.classList.add("task-container");
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    task_container.appendChild(tasks);
    project_content.appendChild(task_container);
    renderTasks(projects, project);

    const addTaskBtn = document.createElement("button");
    task_container.appendChild(addTaskBtn);
    addTaskBtn.classList.add("addTask");

    addTaskBtn.innerHTML = "<span id='plus'>+</span> Add Task";

    renderAddTaskForm(tasks, project);
    addTaskBtn.addEventListener("click", () => {
      taskForm = document.querySelector(".task.addTaskContainer");
      taskForm.style.display = "flex";
      addTaskBtn.style.display = "none";
    });
  };

  const addProjectFromModal = function (title, desc) {
    main.createProject(title, desc);
  };

  const renderTasks = function (projects, index) {
    const tasks = projects[index].tasks;
    const taskDOM = document.querySelector(".tasks");
    for (task in tasks) {
      console.log(task);
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.dataset.index = task;
      taskDOM.appendChild(taskElement);
      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      const checkbox = document.createElement("div");
      checkbox.classList.add("checkbox");
      if (tasks[task].finished) {
        checkbox.classList.add("checked");
      }
      const taskName = document.createElement("p");
      taskName.classList.add("taskName");
      taskElement.appendChild(taskInfo);
      taskInfo.appendChild(checkbox);
      taskName.textContent = tasks[task].title;
      taskInfo.appendChild(taskName);
      const taskDue = document.createElement("p");
      const rightTask = document.createElement("div");
      const removeButton = document.createElement("button");

      rightTask.classList.add("rightTask");
      taskDue.classList.add("timedue");
      taskElement.appendChild(rightTask);

      rightTask.append(taskDue);
      rightTask.append(removeButton);

      taskDue.textContent = tasks[task].dueDate;
      removeButton.classList.add("remove");
      removeButton.textContent = "x";
    }
    const taskElements = document.querySelectorAll(".task");
    if (!taskElements.length < 0) {
      taskElements.forEach((task) => {
        task.addEventListener("click", function () {
          tasks[task.dataset.index].finished =
            !tasks[task.dataset.index].finished;
          task.children[0].children[0].classList.toggle("checked");
        });
      });
    }
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        main.removeTask(
          index,
          event.target.parentNode.parentNode.dataset.index
        );
        clearTasks();
        renderTasks(projects, index);
      });
    });
  };

  const renderAddTaskForm = function (task, index) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("addTaskContainer", "task");
    task.appendChild(taskContainer);
    const addTaskForm = document.createElement("form");
    taskContainer.appendChild(addTaskForm);

    addTaskForm.id = "addTaskForm";

    const taskInputs = document.createElement("div");
    addTaskForm.appendChild(taskInputs);
    taskInputs.classList.add("taskInputs");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("taskInputName");
    nameInput.id = "inputName";
    nameInput.placeholder = "Name of Task";
    nameInput.required = true;

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("taskInputDate");
    dateInput.id = "inputDate";
    dateInput.required = true;

    const taskButtons = document.createElement("div");
    const submit_task = document.createElement("button");
    submit_task.id = "submit-task";
    submit_task.type = "submit";
    submit_task.textContent = "Submit";
    const cancel_task = document.createElement("button");
    cancel_task.id = "cancel-task";
    cancel_task.textContent = "Cancel";
    cancel_task.type = "button";
    addTaskForm.appendChild(taskButtons);
    taskButtons.classList.add("taskButtons");

    taskButtons.appendChild(submit_task);
    taskButtons.appendChild(cancel_task);
    taskInputs.appendChild(nameInput);
    taskInputs.appendChild(dateInput);

    const addTaskBtn = document.querySelector(".addTask");

    addTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      taskContainer.style.display = "none";
      addTaskBtn.style.display = "block";
      addTask(index, nameInput.value, dateInput.value);
    });
    cancel_task.onclick = function () {
      taskContainer.style.display = "none";
      addTaskBtn.style.display = "block";
    };
  };

  const clearTasks = function () {
    const taskDOM = document.querySelector(".tasks");
    const addTaskForm = document.querySelector(".addTaskContainer.task");
    taskDOM.innerHTML = "";
    return addTaskForm;
  };
  const addTask = function (index, name, date) {
    const projects = main.getProjects();
    const taskDOM = document.querySelector(".tasks");

    addTaskForm = clearTasks();
    main.createTask(index, name, date);
    renderTasks(projects, index);
    taskDOM.appendChild(addTaskForm);
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
    modal.style.display = "none";
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
