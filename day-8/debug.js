//136. Debugging JavaScript code with Practical (To-Do List App)
const task = [];
function addTask(tsk) {
  if (!tsk) {
    throw new Error("task can't be empty");
  }
  task.push(tsk);

  console.log("task added", task);
}

// addTask();
addTask("learn javascript");

addTask("learn React");
console.log("all tasks : ", task);

function deleteTask(indxing) {}
//12 min done
