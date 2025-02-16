const addBtn=document.getElementById('add-btn');
const todoInput=document.getElementById('todo-input');

const todoItemsContainer=document.getElementById('todo-item-container');


addBtn.addEventListener('click',()=>{
    const value=todoInput.value;

    const li=document.createElement('li')
    li.innerText=value;

    const delBtn=document.createElement('button');
    delBtn.innerText='X';
    
    delBtn.addEventListener('click',()=>{
        li.remove();
    })

    li.appendChild(delBtn);

    todoItemsContainer.appendChild(li);
    todoInput.value='';
})