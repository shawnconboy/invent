// Task-related code
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskListItemsList');
let taskInput = document.getElementById('taskInput');
let saveTaskBtn = document.getElementById('saveTaskBtn');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

addTaskBtn.addEventListener('click', function () {
    document.getElementById('taskModal').style.display = 'block';
    taskInput.value = '';
    taskInput.focus();
});

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

        newTaskDiv.appendChild(newTask);
        newTaskDiv.appendChild(deleteButton);

        taskList.appendChild(newTaskDiv);

        taskInput.value = '';
        document.getElementById('taskModal').style.display = 'none';
    }
});

document.addEventListener('keydown', function (event) {
    var modal = document.getElementById('taskModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        event.preventDefault();
        addTaskBtn.click();
    }
});

let deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
        let parentDiv = button.parentNode;
        parentDiv.remove();
    });
});

var taskModal = document.getElementById('taskModal');
var taskModalClose = document.getElementsByClassName('close')[0];

taskModalClose.addEventListener('click', function () {
    taskModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == taskModal) {
        taskModal.style.display = 'none';
    }
});

taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        saveTaskBtn.click();
    }
});
