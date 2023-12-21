let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskListItemsList');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

addTaskBtn.addEventListener('click', function () {
    let task = prompt("Add a task.");

    if (task !== null && task.trim() !== '') {
        let capitalizedTask = capitalizeWords(task);

        let newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('taskListItems');

        let newTask = document.createElement('li');
        newTask.textContent = capitalizedTask;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'x';

        deleteButton.addEventListener('click', function () {
            newTaskDiv.remove();
        });

        // Add the newTask and deleteButton to newTaskDiv
        newTaskDiv.appendChild(newTask);
        newTaskDiv.appendChild(deleteButton);

        taskList.appendChild(newTaskDiv);
    }
});

// Existing code for deleting tasks
let deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
        let parentDiv = button.parentNode;
        parentDiv.remove();
    });
});
