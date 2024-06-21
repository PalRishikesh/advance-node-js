const taskManager = require('./task-manager')

taskManager.addTask('Buy groceries');
taskManager.addTask('Finish assignment');
taskManager.addTask('Go to schoolnode');
taskManager.completeTask(0)
taskManager.completeTask(1)


taskManager.listTasks().forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task.task} (Completed: ${task.completed})`);
  });