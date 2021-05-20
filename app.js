//selectors
const todo_input = document.querySelector('.todo-input');
const todo_button = document.querySelector('.todo-button');
const todo_list = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Events

todo_button.addEventListener('click', (event) => {
    
    event.preventDefault();

    if (todo_input.value != '') {
        //create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo_input.value;
        todoDiv.appendChild(newTodo);

        //create mark button
        const markButton = document.createElement('button');
        markButton.classList.add('check-btn');
        markButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(markButton);

        //create mark button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteButton);

        //append list
        todo_list.appendChild(todoDiv);

        //clear input
        todo_input.value = '';

    } else {
        return;
    }


});

todo_list.addEventListener('click', (event) => {

    const item =  event.target;

    //delete
    if (item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
    }

    //check
    if (item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

});

filterOption.addEventListener('click', (event) => {

    const todos = todo_list.childNodes;

    todos.forEach(todo => {
        switch (event.target.value) {
            case 'all':
                 todo.style.display = "flex";
                break;
            case 'completed':
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break
            case 'uncompleted':
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
        }
    });

});