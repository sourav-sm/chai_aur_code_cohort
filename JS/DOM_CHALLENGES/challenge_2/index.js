const redButton=document.getElementById("redButton");
const greenButton=document.getElementById("greenButton");
const blueButton=document.getElementById("blueButton");
const purpleButton=document.getElementById("purpleButton");
const resetButton=document.getElementById("resetButton");
const changeColor=document.getElementById("mainHeading");

redButton.addEventListener('click',()=>{
    changeColor.style.color='red';
})

greenButton.addEventListener('click',()=>{
    changeColor.style.color='green';
})

blueButton.addEventListener('click',()=>{
    changeColor.style.color='blue';
})

purpleButton.addEventListener('click',()=>{
    changeColor.style.color='purple';
})

resetButton.addEventListener('click',()=>{
    changeColor.style.color='black';
})