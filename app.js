let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskListItems');

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

addTaskBtn.addEventListener('click', function () {
    let task = prompt("Add a task.");

    if (task !== null && task.trim() !== '') {
        let capitalizedTask = capitalizeWords(task);
        let newTask = document.createElement('li');
        newTask.textContent = capitalizedTask;
        taskList.appendChild(newTask);
    }
});
