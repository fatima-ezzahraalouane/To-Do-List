document.addEventListener('DOMContentLoaded', () => {
  updateTaskCounts();
  const addTaskButton = document.getElementById('addTaskButton');
  const modal = document.getElementById('modal');
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
    const status = document.getElementById('taskStatus').value;
    const deadline = document.getElementById('taskDeadline').value;
    const priority = document.getElementById('taskPriority').value;

    if (title && description && deadline) {
      const task = document.createElement('div');
      task.className = 'task';
      task.dataset.priority = priority;

      task.innerHTML = `
          <h3>${title}</h3>
          <p>Date d'échéance : ${deadline}</p>
          <button onclick="changeStatus(this)">Changer statut</button>
          <button onclick="deleteTask(this)">Supprimer</button>
        `;

      document.getElementById(status).appendChild(task);
      modal.style.display = 'none';
      clearModalFields();

      updateTaskCounts();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
});

function changeStatus(button) {
  const task = button.parentElement;
  const currentStatus = task.parentElement.id;
  const nextStatus = currentStatus === 'todo' ? 'doing' : currentStatus === 'doing' ? 'done' : 'todo';
  document.getElementById(nextStatus).appendChild(task);

  updateTaskCounts();
}


// Fonction pour changer le nombre de statistiques
function updateTaskCounts() {
  document.getElementById('todo-count').textContent = document.getElementById('todo').children.length - 1;
  document.getElementById('doing-count').textContent = document.getElementById('doing').children.length - 1;
  document.getElementById('done-count').textContent = document.getElementById('done').children.length - 1;
}





// Function pour supprimer une tache
function deleteTask(button) {
  button.parentElement.remove();
  updateTaskCounts();
}

function clearModalFields() {
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskStatus').value = 'todo';
  document.getElementById('taskDeadline').value = '';
  document.getElementById('taskPriority').value = 'P1';
}
