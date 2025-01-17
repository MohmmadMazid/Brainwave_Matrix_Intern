let input = document.querySelector(".entertask");
let addbutton = document.querySelector(".add");
let todoDiv = document.querySelector(".tasks");

console.log(" input value", input.value);
addbutton.addEventListener("click", (event) => {
  console.log("button is clicked");
  console.log("input value is ", input.value);
  console.log("inputvalue is = ", input.value);
  let div = document.createElement("div");
  div.classList.add("task");
  let h3 = document.createElement("h3");
  h3.classList.add("todoItem");
  console.log(+input.value);
  if (input.value) {
    h3.innerHTML = input.value;
    let deletebutton = document.createElement("button");
    let donebutton = document.createElement("button");
    deletebutton.classList.add("deletetodo");
    donebutton.classList.add("donetodo");
    deletebutton.innerHTML = "remove";
    donebutton.innerHTML = "done";
    div.appendChild(h3);
    div.appendChild(deletebutton);
    div.appendChild(donebutton);
    todoDiv.appendChild(div);
    input.value = "";
  }
});

//deleting the task
todoDiv.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("deletetodo")) {
    e.target.parentElement.remove(); // Remove the task div that contains the button
  }
});

let time = document.querySelector(".time");
let date = document.querySelector(".date");

let newtime = new Date();
let val = newtime.toLocaleTimeString().split(":");
date.innerHTML = newtime.toLocaleDateString();
time.innerHTML = val[0] + ":" + val[1] + val[2].slice(2);

//adding done property
todoDiv.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("donetodo")) {
    let task = e.target.parentElement.querySelector(".todoItem");
    console.log(task);
    task.innerHTML = "✅ " + task.innerHTML; // Prepend the done symbol to the task description
  }
});
