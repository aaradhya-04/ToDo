document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const taskValue = document.getElementById('task').value;
    if (taskValue === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        li.classList.toggle('completed');
    });
    
    const span = document.createElement('span');
    span.textContent = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById('task').value = ''; 
});
