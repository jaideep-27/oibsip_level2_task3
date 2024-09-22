document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = createTaskItem(taskText);
    document.getElementById('pendingTaskList').appendChild(taskItem);
    taskInput.value = ""; // Clear the input
}

function createTaskItem(taskText) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const timestamp = document.createElement('span');
    timestamp.className = "timestamp";
    const currentDate = new Date();
    timestamp.textContent = `Added on: ${currentDate.toLocaleString()}`;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => completeTask(li);

    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(li, taskText);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(li);

    li.appendChild(span);
    li.appendChild(timestamp);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    taskItem.querySelector('.complete-btn').remove(); // Remove complete button
    const completedTimestamp = document.createElement('span');
    completedTimestamp.className = "timestamp";
    const currentDate = new Date();
    completedTimestamp.textContent = `Completed on: ${currentDate.toLocaleString()}`;
    taskItem.appendChild(completedTimestamp);

    // Move to Completed Tasks section
    document.getElementById('completedTaskList').appendChild(taskItem);
}

function editTask(taskItem, oldText) {
    const newText = prompt("Edit your task:", oldText);
    if (newText !== null && newText.trim() !== "") {
        taskItem.firstChild.textContent = newText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
