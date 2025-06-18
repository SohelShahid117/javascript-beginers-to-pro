//138. Introduction to Asynchronous JavaScript
function first() {
  console.log(1);
}

// function second() {
//   console.log(2);
// }

function second() {
  setTimeout(() => {
    console.log(2);
  }, 0);

  /*
  kono 1t jinis loading e rakte hole tokon amader asynchronous JS er need hoi.
  jemon API die DB teke data anbo.tahole amar kiso time lagbe r sei somoier kajti korbo asynchronous JS die
  */
}

function third() {
  console.log(3);
}

first();
second();
third();

/*
1.by default javascript is synchronous--->checking/compile from top to bottom


Synchronous JavaScript:
1.Executes line by line, in order.
2.Each statement waits for the previous one to finish.
3.Blocking: If a task takes time (e.g., file reading), it blocks the rest.
*/
