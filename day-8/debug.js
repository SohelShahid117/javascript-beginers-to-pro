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
// addTask("learn javascript");

// addTask("learn React");

// addTask("learn Next JS");
console.log("all tasks : ", task);

function deleteTask(indxing) {
  if (indxing < 0 || indxing >= task.length) {
    throw new Error("invalid task index");
  }
  console.log(indxing);

  task.splice(indxing, 1);
  console.log("remaining task are : ", task);
  console.log("remaining task are : ", task.length);
}

// deleteTask(2);
// // deleteTask(3);
// deleteTask(1);

console.log(task);

try {
  addTask("learn javascript");

  addTask("learn React");

  addTask("learn Next JS");

  deleteTask(5);
  // deleteTask(3);
  deleteTask(2);
  // deleteTask(1);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("all tasks are : ", task);
}
