const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];


// Load tasks when the page loads

window.addEventListener("load", () => {
    loadTask();
    renderTasks();
})
// Add task button
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    tasks.push(taskText);
    saveTasks();
    renderTasks();
    taskInput.value = "";
})

  // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const data = localStorage.getItem("tasks");
        if(data) {
            tasks = JSON.parse(data);
        }
    }

    // Render tasks to the UI
    function renderTasks() {
        taskList.innerHTML = ""; // Clear the list first

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;

            // Optional: Add a remove button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "x";
            removeBtn.addEventListener("click", () => {
                tasks.splice(index, 1); // remove task from array
                saveTasks();
                renderTasks();
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }