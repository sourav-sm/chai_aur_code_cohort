const nameInput=document.getElementById('nameInput');
const jobInput=document.getElementById('jobInput');
const ageInput=document.getElementById('ageInput');
const bioInput=document.getElementById('bioInput');

const nameDisplay=document.getElementById('nameDisplay');
const jobDisplay=document.getElementById('jobDisplay');
const ageDisplay=document.getElementById('ageDisplay'); 
const bioDisplay=document.getElementById('bioDisplay');

nameInput.addEventListener("input", () => {//input event is fired when the value of an <input>, <select>, or <textarea> element has been changed.
    nameDisplay.innerText = nameInput.value || "Not provided";
});

jobInput.addEventListener("input",()=>{
    jobDisplay.innerText=jobInput.value || "Not Provided";
})

ageInput.addEventListener("input",()=>{
    ageDisplay.innerText=ageInput.value || "Not Provided";
})

bioInput.addEventListener("input",()=>{
    bioDisplay.innerText=bioInput.value || "Not Provided";
})

