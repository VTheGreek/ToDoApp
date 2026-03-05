const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = [];

// Add task button
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    SaveData();
})

// Save data function
function SaveData() {
    const data = tasks.push(taskList.values());
    localStorage.setItem("taskData", data);
}