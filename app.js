document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskModal = document.getElementById('modal');
    const cancelButton = document.getElementById('cancelButton');
    const addTask = document.getElementById('addTask');

    addTaskButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    addTask.addEventListener('click', () => {
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const status = document
    });
});