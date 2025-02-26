/**
 * Write your challenge solution here
 */

const currTime=document.getElementById("curr-time");
const currDate=document.getElementById("curr-date");
const hourHand=document.getElementById("hour-hand");
const minHand=document.getElementById("min-hand");   
const secHand=document.getElementById("sec-hand");

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

