let allTasks = ["run", "buy groceries", "clean the house", "finish homework"];

let taskList = document.getElementById("tasks");
let addTastButton = document.getElementById("add-task-button");
let clearTasksButotn = document.getElementById("clear-tasks-button");

allTasks.forEach(task => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let textContent = document.createTextNode(task);
    let spanText = document.createElement("span");
    spanText.appendChild(textContent);
    li.appendChild(spanText);
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    li.appendChild(checkbox);
    li.className = "task-item";
    taskList.appendChild(li);
})