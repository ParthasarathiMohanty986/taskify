// ===== LOGIN PAGE =====
if (window.location.pathname.includes("index.html")) {
  document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    if (!email) return alert("Please enter your email!");

    localStorage.setItem("currentUser", email);
    if (!localStorage.getItem(email)) {
      localStorage.setItem(email, JSON.stringify([]));
    }
    window.location.href = "tasks.html";
  });
}

// ===== TASK PAGE =====
if (window.location.pathname.includes("tasks.html")) {
  const userEmail = localStorage.getItem("currentUser");
  const userEmailEl = document.getElementById("userEmail");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!userEmail) window.location.href = "index.html";
  userEmailEl.textContent = userEmail;

  let tasks = JSON.parse(localStorage.getItem(userEmail)) || [];

  const saveTasks = () => localStorage.setItem(userEmail, JSON.stringify(tasks));

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task}</span>
        <div class="action-btns">
          <button class="edit" onclick="editTask(${i})">Edit</button>
          <button class="delete" onclick="deleteTask(${i})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return alert("Please enter a task!");
    tasks.push(text);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  });

  window.editTask = (i) => {
    const newText = prompt("Edit your task:", tasks[i]);
    if (newText && newText.trim()) {
      tasks[i] = newText.trim();
      saveTasks();
      renderTasks();
    }
  };

  window.deleteTask = (i) => {
    tasks.splice(i, 1);
    saveTasks();
    renderTasks();
  };

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });

  renderTasks();
}
