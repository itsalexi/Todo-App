const Task = require("./task.js");

class Project {
  constructor(title, desc, index, tasks = []) {
    this.title = title;
    this.desc = desc;
    this.index = index;
    this.tasks = tasks;
  }
  addTask(title, dueDate) {
    const task = new Task(title, dueDate);
    this.tasks.push(task);
    return task;
  }
  removeTask(index) {
    return this.tasks.splice(index, 1);
  }
}

module.exports = Project;
