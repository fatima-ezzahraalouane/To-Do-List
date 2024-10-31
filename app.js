document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskModal = new bootstrap.Modal(document.getElementById("taskModal"));
    const taskForm = document.getElementById("taskForm");
    // const totalTaks = document.getElementById("totalTasks");

    // const cancelButton = document.getElementById('cancelButton');
    // const addTask = document.getElementById('addTask');

    // addTaskButton.addEventListener('click', () => {
    //     modal.style.display = 'flex';
    // });

    // cancelButton.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });
    
    let tasks = [];

    addTaskButton.onclick = () => taskModal.show();

    taskForm.onsubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById("taskTitle").value;
        const description = document.getElementById("taskDescription").value;
        const status = document.getElementById("taskStatus").value;
        const dueDate = document.getElementById("taskDueDate").value;
        const priority = document.getElementById("taskPriority").value;

        const task = { id: Date.now(), title, description, status, dueDate, priority };
        tasks.push(task);
        updateTaskLists();
        taskForm.reset();
        taskModal.hide();

    };

    function updateTaskLists() {

    }



    // addTask.addEventListener('click', () => {
    //     const title = document.getElementById('taskTitle').value;
    //     const description = document.getElementById('taskDescription').value;
    //     const status = document.getElementById('taskStatus').value;
    //     const deadline = document.getElementById('taskDeadline').value;
    //     const priority = document.getElementById('taskPriority').value;

    // });
});