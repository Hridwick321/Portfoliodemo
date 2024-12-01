
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const newTask = document.createElement('li');
    
    
    const taskNumber = taskList.children.length + 1;
    
    newTask.innerHTML = `
      <span>${taskNumber}. ${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    
   
    taskList.appendChild(newTask);

   
    taskInput.value = '';

    
    newTask.addEventListener('click', function () {
      newTask.classList.toggle('completed');
    });

   
    const deleteBtn = newTask.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation(); 
      taskList.removeChild(newTask);

      
      updateTaskNumbers();
    });
  }
});


function updateTaskNumbers() {
  const tasks = taskList.querySelectorAll('li');
  tasks.forEach((task, index) => {
    task.querySelector('span').textContent = `${index + 1}. ${task.textContent.split('. ')[1]}`;
  });
}
