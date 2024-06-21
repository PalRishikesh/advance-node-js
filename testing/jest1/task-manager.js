// const tasks = [{
//     "task" :"Buy Gift",
//     completed:false
// }];


const tasks = [];


function addTask(task) {
  tasks.push(
    { 
        task, 
        completed: true 
    }
    );
}

function listTasks() {
  return tasks;
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
  }
}

module.exports = { addTask, listTasks, completeTask };