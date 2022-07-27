const Task = require("./task.js");

class Project {
  constructor(title, desc, index) {
    this.title = title;
    this.desc = desc;
    this.index = index;
    this.tasks = [];
  }
  addTask(title, dueDate) {
    const task = new Task(title, dueDate);
    this.tasks.push(task);
    return task;
  }
}

module.exports = Project;
