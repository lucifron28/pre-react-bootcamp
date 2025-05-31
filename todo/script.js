document.addEventListener("DOMContentLoaded", () => {

    let allTasks = ["run", "buy groceries", "clean the house", "finish homework"];

    let taskList = document.getElementById("tasks");
    let taskInput = document.getElementById("task-input");
    let addTaskButton = document.getElementById("add-task-button");
    let clearTasksButton = document.getElementById("clear-tasks-button");
    let cancelButton = document.getElementById("cancel-button");
    let modal = document.getElementById("modal");
    let submitButton = document.getElementById("submit-button");

    addTaskButton.addEventListener("click", () => {
        modal.className = "active";
        renderData();
    });

    clearTasksButton.addEventListener("click", () => {
        allTasks = [];
        renderData();
    });

    submitButton.addEventListener("click", () => {
        allTasks.push(taskInput.value);
        if (taskInput.value) {
            renderData();
            taskInput.value = "";
            modal.className = "";
        }
    });

    cancelButton.addEventListener("click", () => {
        modal.className = "";
    });

    function renderData() {
        taskList.innerHTML = "";
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
        if (allTasks.length === 0) {
            let emptyMessage = document.createElement("h6");
            emptyMessage.textContent = "Your tasks is empty."
            taskList.appendChild(emptyMessage);
        }
    }

    renderData();
});