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

// 
// 
// 
// 
// Event Related Code

let addEventBtn = document.getElementById('addEventBtn');
let eventList = document.querySelector('.eventList');
let eventInput = document.getElementById('eventInput');
let saveEventBtn = document.getElementById('saveEventBtn');

addEventBtn.addEventListener('click', function () {
    document.getElementById('eventModal').style.display = 'block';
    eventInput.value = '';
    eventInput.focus();
});

document.getElementById('saveEventBtn').addEventListener('click', function () {
    let eventInput = document.getElementById('eventInput');
    let event = eventInput.value.trim();

    if (event !== '') {
        let capitalizedEvent = capitalizeWords(event);

        let newEventDiv = document.createElement('div');
        newEventDiv.classList.add('events');

        let newEvent = document.createElement('li');
        newEvent.textContent = capitalizedEvent;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'x';

        deleteButton.addEventListener('click', function () {
            newEventDiv.remove();
        });

        newEventDiv.appendChild(newEvent);
        newEventDiv.appendChild(deleteButton);

        eventList.appendChild(newEventDiv);

        eventInput.value = '';
        document.getElementById('eventModal').style.display = 'none';
    }
});

document.addEventListener('keydown', function (event) {
    var modal = document.getElementById('eventModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        event.preventDefault();
        addEventBtn.click();
    }
});

var eventModal = document.getElementById('eventModal');
var eventModalClose = document.getElementsByClassName('close')[3];

eventModalClose.addEventListener('click', function () {
    eventModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == eventModal) {
        eventModal.style.display = 'none';
    }
});

eventInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        saveEventBtn.click();
    }
});

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// 
// 
// 
// Date features
let currentDate = document.getElementById('currentDate');
let dayType = document.getElementById('dayType');

let options = { weekday: 'long', month: 'long', day: 'numeric' };
let formattedDate = new Date().toLocaleDateString('en-US', options);

// Add the ordinal suffix for the day of the month
let dayOfMonth = new Date().getDate();
let ordinalSuffix = getOrdinalSuffix(dayOfMonth);
formattedDate += ordinalSuffix;

currentDate.textContent = formattedDate;

// Set the day type based on the day of the week
let dayOfWeek = new Date().getDay();
switch (dayOfWeek) {
    case 0: // Sunday
    case 1: // Monday
    case 3: // Wednesday
    case 5: // Friday
        dayType.textContent = 'truck';
        break;
    case 2: // Tuesday
    case 4: // Thursday
    case 6: // Saturday
        dayType.textContent = 'backstock';
        break;
    default:
        dayType.textContent = 'unknown day';
}

// Function to get the ordinal suffix for the day of the month
function getOrdinalSuffix(number) {
    if (number >= 11 && number <= 13) {
        return 'th';
    }
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}