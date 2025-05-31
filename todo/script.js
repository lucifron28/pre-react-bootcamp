let allTasks = ["run", "buy groceries", "clean the house", "finish homework"];

let taskList = document.getElementById("tasks");

allTasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
})