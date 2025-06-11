//121. Adding and removing elements dynamically with JavaScrip
console.log("hello");

//6 min done

const list = document.getElementById("list");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");

console.log(list);
console.log(list.children);
console.log(list.children.length);
console.log(addItem);
console.log(removeItem);

addItem.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
  console.log(newItem);
});

removeItem.addEventListener("click", () => {
  list.removeChild(list.lastChild);
});

/*
how to add new element:
1.createElement
2.innerText || textContent e add korte hobe
3.appendChild korte hobe
*/

/*
how to remove element:
1.removeChild e konta remove korbo seta bole dite hobe
2.

*/
