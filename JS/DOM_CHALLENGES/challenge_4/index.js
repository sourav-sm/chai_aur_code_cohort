const add_button=document.getElementById("add-button");
const input=document.getElementById("taskInput");
const taskList=document.getElementById("taskList"); 

add_button.addEventListener('click',()=>{
    const task=input.value;
    if(task){
        const li=document.createElement('li');
        li.innerText=task;
        taskList.appendChild(li);
        input.value="";
    }
})

