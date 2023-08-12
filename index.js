const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22',
    dueTime:'11:22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22',
    dueTime:'11:22'
  }];
  
display();
function display() {
    let todo = '';
    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        const { name, dueDate, dueTime } = todoObject;
        const html = `
        <div>${i + 1})</div>
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>${dueTime}</div>
        <button class="delete"
            onclick=" 
            todoArray.splice(${i},1)
            display();
            localstore();
           ">Delete
        </button>
        `;
        todo += html;
    }
    document.querySelector('.ToDoList').innerHTML = todo;
}

function addTodo() {
    let inputElement = document.querySelector('.Input');
    let name = inputElement.value;
    let inputDate = document.querySelector('.js-due-date');
    let dueDate = inputDate.value;
    let inputTime = document.querySelector('.js-due-time');
    let dueTime = inputTime.value;
    todoArray.push({ name, dueDate, dueTime });
    display();
    localstore();
    inputElement.value = '';
    inputDate.value = '';
    inputTime.value = '';
}
function localstore()
{
    localstorage.setItem('todoArray',JSON.stringify(todoArray));
}
