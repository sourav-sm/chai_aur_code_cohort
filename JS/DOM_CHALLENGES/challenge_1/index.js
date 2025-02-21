const togglebutton=document.getElementById("toggleButton");
const currstatus=document.getElementById("status");
const body=document.getElementById("body");
const bulb=document.getElementById("bulb");
const bublbBase=document.getElementById("bulb-base");

togglebutton.addEventListener('click',()=>{ 
    const currColor = body.style.backgroundColor;
    console.log("currColor",currColor);
    if(!currColor || currColor==='white'){
        body.style.backgroundColor='black';
        bulb.style.backgroundColor='yellow';
        togglebutton.innerText='Turn Off';
        currstatus.innerText='Status: ON';
        body.style.color='white';
    }else{
        body.style.backgroundColor='white';
        bulb.style.backgroundColor='grey';
        togglebutton.innerText='Turn On';
        currstatus.innerText='Status: Off';
        body.style.color='black';
    }

})