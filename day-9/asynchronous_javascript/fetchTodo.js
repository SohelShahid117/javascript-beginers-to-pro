const fetchTodoData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log(response);

    const todoData = await response.json();
    console.log(todoData);
  } catch (error) {
    console.log("fetch data failed : ", error.message);
  }
};

fetchTodoData();
