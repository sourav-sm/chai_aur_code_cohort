/**
 * Write your challenge solution here
 */
const toggleButton = document.getElementById('toggle-btn');
const panel = document.getElementById('panel');
const closeButton = document.getElementById('close-btn');
const menuItems=document.querySelectorAll('.menu-item');

toggleButton.addEventListener('click',()=>{
   panel.style.right="0px";
})

closeButton.addEventListener('click',()=>{
    panel.style.right="-360px";
})

menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        alert(`Hello from ${item.innerText}`);
        panel.style.right="-360px"; 
    })
})

document.addEventListener('click',(e)=>{
    if(!panel.contains(e.target) && e.target!==toggleButton){
        panel.style.right="-360px";
    }
})

