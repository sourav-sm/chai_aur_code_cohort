/**
 * Write your challenge solution here
 */

const currTime=document.getElementById("curr-time");
const currDate=document.getElementById("curr-date");
const hourHand=document.getElementById("hour-hand");
const minHand=document.getElementById("min-hand");   
const secHand=document.getElementById("sec-hand");
const clock = document.querySelector(".clock");

function addClockNumbers() {
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement("div");
        number.classList.add("number");
        number.style.setProperty("--rotation", `${i * 30}deg`);
        number.innerHTML = `<span>${i}</span>`;
        clock.appendChild(number);
    }
}

addClockNumbers();

function updateTime(){
    const currentTime=new Date();

    const currentDate=currentTime.getDate();
    let currentMonth=currentTime.getMonth()+1;
    const currentYear=currentTime.getFullYear();
    const hours=currentTime.getHours()%12; 
    const mins=currentTime.getMinutes();
    const secs=currentTime.getSeconds();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentTime.getDay()];

    //analog clock
    const hourDeg=hours*30+mins*0.5;//as the diff btw hours is 30deg and for smooth transition of hour hand we have to add the mins*0.5
    const minDeg=mins*6;//as the diff btw mins is 6deg
    const secDeg=secs*6;//as the diff btw secs is 6deg
    
    //date calculation
    switch(currentMonth){
        case 1:
            currentMonth="January";
            break;
        case 2:
            currentMonth="February";
            break;
        case 3:
            currentMonth="March";
            break;  
        case 4:
            currentMonth="April";
            break;
        case 5:
            currentMonth="May";
            break;  
        case 6:
            currentMonth="June";
            break;
        case 7:
            currentMonth="July";
            break;
        case 8:
            currentMonth="August";
            break;  
        case 9:
            currentMonth="September";
            break;
        case 10:
            currentMonth="October";
            break;      
        case 11:
            currentMonth="November";
            break;
        case 12:
            currentMonth="December";
            break;
    }

    currTime.innerText=`${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;//to add 01 02 03 etc
    currDate.innerText=`${currentDayOfWeek} ${currentDate} ${currentMonth} ${currentYear}`;

    //analog clock hand movemnt
    hourHand.style.transform=`translateX(-50%) rotate(${hourDeg}deg)`;
    minHand.style.transform=`translateX(-50%) rotate(${minDeg}deg)`;
    secHand.style.transform=`translateX(-50%) rotate(${secDeg}deg)`;
}



updateTime();//update the result when the page loads
setInterval(updateTime,1000);//update the result every second


// function update(){
//     const d=new Date();
//     const options = { 
//         weekday: "long", 
//         day: "2-digit", 
//         month: "long", 
//         year: "numeric" 
//       };

      
//     const timeStr = d.toLocaleTimeString("en-GB", { 
//         hour: "2-digit", 
//         minute: "2-digit", 
//         second: "2-digit" ,
//         hour12: true,
//      });
//     document.getElementsByClassName("digital-clock")[0].textContent=timeStr.toUpperCase();
//     document.getElementsByClassName("date")[0].textContent=`${d.toLocaleDateString(undefined, options)}`;
      
// }
// setInterval(update,1000);
// const clock = document.getElementsByClassName("clock")[0];


// // Generate Numbers Dynamically
// // for (let i = 1; i <= 12; i++) {
// //   let number = document.createElement("div");
// //   number.classList.add("number");

// //   // Set Rotation
// //   let angle = (i * 29.6) * (Math.PI / 180); // Convert degrees to radians
// //   let x = Math.sin(angle) * 115;
// //   let y = -Math.cos(angle) * 125;

// //   number.style.transform = `translate(${x}px, ${y}px)`;
// //   number.innerHTML = `<span>${i}</span>`;
// //   clock.appendChild(number);
// // }

// // Generate Hands Dynamically 
// const hands = ["hour", "minute", "second"];
// for (let i = 0; i < 3; i++) {
//   let hand = document.createElement("div");
//   hand.classList.add("hand");
//   hand.classList.add(hands[i]);
//   clock.appendChild(hand);
// }

// setInterval(() => {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   let hourRotation = (hours / 12) * 360 + (minutes / 60) * 30;
//   let minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6;
//   let secondRotation = (seconds / 60) * 360;

//   document.querySelector(".hour").style.transform = `rotate(${hourRotation}deg)`;
//   document.querySelector(".minute").style.transform = `rotate(${minuteRotation}deg)`;
//   document.querySelector(".second").style.transform = `rotate(${secondRotation}deg)`;
// }, 1000);