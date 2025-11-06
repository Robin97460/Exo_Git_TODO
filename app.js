const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Étudiant 1 : Ajout de tâche
addBtn.addEventListener("click", () => {

  // Étudiant 2 : bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
});

// Étudiant 2 : Suppression
taskList.addEventListener("click", (e) => {
  if (e.target.textContent === "🗑") {
    e.target.parentElement.remove();
  }
});
=======
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
});

