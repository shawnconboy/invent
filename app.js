document.addEventListener('DOMContentLoaded', function () {
    // 
    // 
    // 
    // 
    // 
    // 
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


    // 
    // 
    // 
    // 
    // 
    // Expiration-related code
    let addItemBtn = document.getElementsByClassName('addItemBtn')[0];
    let expirationList = document.getElementById('expirationsList');
    let expirationInput = document.getElementById('expirationInput');
    let saveItemBtn = document.getElementById('saveItemBtn');

    addItemBtn.addEventListener('click', function () {
        document.getElementById('expirationsModal').style.display = 'block';
        expirationInput.value = '';
        expirationInput.focus();
    });

    document.getElementById('saveItemBtn').addEventListener('click', function () {
        let expirationInput = document.getElementById('expirationInput');
        let expiration = expirationInput.value.trim();

        if (expiration !== '') {
            let capitalizedExpiration = capitalizeWords(expiration);

            let newItemDiv = document.createElement('div');
            newItemDiv.classList.add('expiringItems'); // Fix the class name

            let newItem = document.createElement('li');
            newItem.textContent = capitalizedExpiration;

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = 'x';

            deleteButton.addEventListener('click', function () {
                newItemDiv.remove();
            });

            newItemDiv.appendChild(newItem);
            newItemDiv.appendChild(deleteButton);

            expirationList.appendChild(newItemDiv);

            expirationInput.value = '';
            document.getElementById('expirationsModal').style.display = 'none';
        }
    });

    document.addEventListener('keydown', function (event) {
        var modal = document.getElementById('expirationsModal');
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            // } else if (
            //     (event.key === 'e' || event.key === 'E') &&
            //     document.activeElement !== expirationInput
            // ) {
            event.preventDefault();
            addItemBtn.click();
        }
    });

    var expirationModal = document.getElementById('expirationsModal');
    var expirationModalClose = document.getElementsByClassName('close')[1];

    expirationModalClose.addEventListener('click', function () {
        expirationModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == expirationModal) {
            expirationModal.style.display = 'none';
        }
    });

    expirationInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            saveItemBtn.click();
        }
    });
});

// 
// 
// 
// 
// 
// 
// Coworker Related Code
// JavaScript

let addNoteBtn = document.getElementById('addNoteBtn');
let noteList = document.querySelector('.noteList'); // Fix this line
let coworkerInput = document.getElementById('coworkerInput');
let saveNoteBtn = document.getElementById('saveNoteBtn');

addNoteBtn.addEventListener('click', function () {
    document.getElementById('coworkerModal').style.display = 'block';
    coworkerInput.value = '';
    coworkerInput.focus();
});

document.getElementById('saveNoteBtn').addEventListener('click', function () {
    let coworkerInput = document.getElementById('coworkerInput');
    let note = coworkerInput.value.trim();

    if (note !== '') {
        let capitalizedNote = capitalizeWords(note);

        let newNoteDiv = document.createElement('div');
        newNoteDiv.classList.add('notes');

        let newNote = document.createElement('li');
        newNote.textContent = capitalizedNote;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'x';

        deleteButton.addEventListener('click', function () {
            newNoteDiv.remove();
        });

        newNoteDiv.appendChild(newNote);
        newNoteDiv.appendChild(deleteButton);

        noteList.appendChild(newNoteDiv);

        coworkerInput.value = '';
        document.getElementById('coworkerModal').style.display = 'none';
    }
});

document.addEventListener('keydown', function (event) {
    var modal = document.getElementById('coworkerModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        event.preventDefault();
        addNoteBtn.click();
    }
});

var coworkerModal = document.getElementById('coworkerModal');
var coworkerModalClose = document.getElementsByClassName('close')[2];

coworkerModalClose.addEventListener('click', function () {
    coworkerModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == coworkerModal) {
        coworkerModal.style.display = 'none';
    }
});

coworkerInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        saveNoteBtn.click();
    }
});

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
