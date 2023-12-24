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
