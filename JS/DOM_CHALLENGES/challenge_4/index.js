const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function updateStats() {
    const tasks = document.querySelectorAll(".task-item");
    const completed = document.querySelectorAll(".task-item.completed");
    totalTasks.textContent = `Total tasks: ${tasks.length}`;
    completedTasks.textContent = `Completed: ${completed.length}`;
}

function checkEmptyList() {
    if (taskList.children.length === 0) {
      taskList.innerHTML = '<li class="empty-list">No tasks yet. Add one above!</li>';
    } else {
      const emptyMessage = document.querySelector(".empty-list");
      if (emptyMessage) emptyMessage.remove();
    }
  }

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("complete-checkbox");
    checkbox.addEventListener("change", () => {
      listItem.classList.toggle("completed", checkbox.checked);
      updateStats();
    });

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      listItem.remove();
      checkEmptyList();
      updateStats();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    checkEmptyList();
    updateStats();
}

document.addEventListener("DOMContentLoaded", () => {

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });
  
    checkEmptyList();
    updateStats();
  });
  
