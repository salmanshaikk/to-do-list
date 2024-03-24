function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() !== "") {
        const tasksList = document.getElementById('tasksList');
        const li = document.createElement('li');
        li.textContent = input.value;
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            tasksList.removeChild(li);
        };
        
        // Add functionality to mark task as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        tasksList.appendChild(li);

        // Clear the input field
        input.value = '';
    } else {
        alert("Please enter a task!");
    }
}

// Initial example task
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taskInput').value = 'Example Task';
    addTask();
});
