document.addEventListener("DOMContentLoaded", () => {

    let allTasks = ["run", "buy groceries", "clean the house", "finish homework"];

    let taskList = document.getElementById("tasks");
    let addTaskButton = document.getElementById("add-task-button");
    let clearTasksButton = document.getElementById("clear-tasks-button");
    let cancelButton = document.getElementById("cancel-button");
    let modal = document.getElementById("modal");

    addTaskButton.addEventListener("click", () => {
        modal.className = "active";
    });

    cancelButton.addEventListener("click", () => {
        modal.className = "";
    });

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
});

});