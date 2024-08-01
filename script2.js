const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompleted');

function createTaskElement(taskContent) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    const span = document.createElement('span');
    span.textContent = taskContent;
    span.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

function addTask() {
    const taskContent = taskInput.value.trim();
    if (taskContent === '') return;

    const taskElement = createTaskElement(taskContent);
    taskList.appendChild(taskElement);

    taskInput.value = '';
}

function clearCompletedTasks() {
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach(task => {
        if (task.querySelector('.task-checkbox').checked) {
            task.remove();
        }
    });
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
clearCompletedButton.addEventListener('click', clearCompletedTasks);
