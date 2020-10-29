//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Create Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    //Inserisco il nuovo Todo li all'interno del div
    todoDiv.appendChild(newTodo);
    // Create check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to ul
    todoList.appendChild(todoDiv);
    // clear input value
    todoInput.value = "";

}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    // elimina todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animazione:
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })

    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}