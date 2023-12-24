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