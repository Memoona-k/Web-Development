document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };

        li.appendChild(deleteButton);
        li.onclick = function() {
            li.classList.toggle('completed');
            saveTasks();
        };

        taskList.appendChild(li);
        taskInput.value = '';
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('taskList').children;
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const taskData = {
            text: task.firstChild.textContent,
            completed: task.classList.contains('completed')
        };
        tasks.push(taskData);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        const taskList = document.getElementById('taskList');
        for (const task of tasks) {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add('completed');
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(deleteButton);
            li.onclick = function() {
                li.classList.toggle('completed');
                saveTasks();
            };

            taskList.appendChild(li);
        }
    }
}
