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