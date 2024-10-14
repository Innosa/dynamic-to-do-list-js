"use script";

/*
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    if (taskText !== "") {
      // Create list items
      const taskItem = document.createElement("li");

      // Set it's textContent to taskText
      li.textContent = taskText;

      // Append li to the textList
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  }

  // addTask();
});
*/

document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Initialize tasks array
  let tasks = [];

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach((task) => addTaskToDOM(task));
    }
  }

  // Save tasks to Local Storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to add a task to the DOM
  function addTaskToDOM(taskText) {
    // Create a new li element and set its textContent to taskText
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Assign an onclick event to the remove button to remove the task
    removeBtn.onclick = function () {
      li.remove(); // Remove the li element from the taskList
      removeTask(taskText); // Remove task from tasks array and update Local Storage
    };

    // Append the remove button to the li element
    li.appendChild(removeBtn);

    // Append the li element to the task list
    taskList.appendChild(li);
  }

  // Function to add a task
  function addTask() {
    // Get task input value and trim it
    const taskText = taskInput.value.trim();

    // Check if taskText is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Add task to the tasks array and save to Local Storage
    tasks.push(taskText);
    saveTasks();

    // Add task to the DOM
    addTaskToDOM(taskText);

    // Clear the task input field
    taskInput.value = "";
  }

  // Function to remove a task from tasks array and Local Storage
  function removeTask(taskText) {
    tasks = tasks.filter((task) => task !== taskText);
    saveTasks();
  }

  // Event listener for "Add Task" button
  addButton.addEventListener("click", addTask);

  // Event listener for "Enter" key press
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(); // Add task on Enter key press
    }
  });

  // Load tasks when the page loads
  loadTasks();
});
