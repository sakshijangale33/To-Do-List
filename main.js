document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-task');
        completeButton.addEventListener('click', () => {
            taskItem.classList.add('completed');
            completeTask(taskItem);
        });

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }

    function completeTask(taskItem) {
        taskList.removeChild(taskItem);
        completedTaskList.appendChild(taskItem);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const dateAdded = new Date().toLocaleString();
            addTask(taskText, dateAdded);
            taskInput.value = '';
        }
    });

    function addTask(taskText, dateAdded) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <br><small>Added: ${dateAdded}</small>`;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-task');
        completeButton.addEventListener('click', () => {
            taskItem.classList.add('completed');
            const dateCompleted = new Date().toLocaleString();
            completeTask(taskItem, dateCompleted);
        });

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }

    function completeTask(taskItem, dateCompleted) {
        taskItem.innerHTML += `<br><small>Completed: ${dateCompleted}</small>`;
        taskList.removeChild(taskItem);
        completedTaskList.appendChild(taskItem);
    }
});

