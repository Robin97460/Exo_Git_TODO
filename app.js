const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


const completeBtn = document.createElement("button");
completeBtn.textContent = "✔";
li.appendChild(completeBtn);

taskList.addEventListener("click", (e) => {
  if (e.target.textContent === "✔") {
    e.target.parentElement.classList.toggle("completed");
  }
});

