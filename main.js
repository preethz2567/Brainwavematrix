 // Get elements
 const taskInput = document.getElementById("taskInput");
 const addButton = document.getElementById("addButton");
 const todoList = document.getElementById("todoList");
 
 // Add task function
 addButton.addEventListener("click", function() {
     if (taskInput.value.trim() !== "") {
         const li = document.createElement("li");
 
         // Create the task text
         const taskText = document.createElement("span");
         taskText.textContent = taskInput.value;
         li.appendChild(taskText);
 
         // Add the complete button
         const completeButton = document.createElement("button");
         completeButton.classList.add("complete-btn");
         completeButton.textContent = "✔️";
         completeButton.addEventListener("click", function() {
             li.classList.toggle("completed");
         });
         li.appendChild(completeButton);
 
         // Add the remove button
         const removeButton = document.createElement("button");
         removeButton.classList.add("remove-btn");
         removeButton.textContent = "❌";
         removeButton.addEventListener("click", function() {
             todoList.removeChild(li);
         });
         li.appendChild(removeButton);
 
         // Add the task to the list
         todoList.appendChild(li);
 
         // Clear the input field
         taskInput.value = "";
     }
 });
 
 // Enable pressing Enter to add tasks
 taskInput.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
         addButton.click();
     }
 });
 