let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskListItemsList');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

addTaskBtn.addEventListener('click', function () {
    // Display the custom modal
    document.getElementById('taskModal').style.display = 'block';
    taskInput.focus();
});

// Add the following code to handle the custom modal's Save button
document.getElementById('saveTaskBtn').addEventListener('click', function () {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    if (task !== '') {
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

        // Clear the input field and hide the modal
        taskInput.value = '';
        document.getElementById('taskModal').style.display = 'none';
    }
});

let deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
        let parentDiv = button.parentNode;
        parentDiv.remove();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('taskModal');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var span = document.getElementsByClassName('close')[0];

    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            saveTaskBtn.click();
        }
    });
});
