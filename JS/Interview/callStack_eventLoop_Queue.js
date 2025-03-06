console.log("start of script 2");

setTimeout(()=>{
    console.log("A");
},0);

setTimeout(()=>{
    console.log("B");
},0);

setTimeout(()=>{
    console.log("C");
},2000);

console.log("end of script 2");

console.log("bye bye");

//ANS------------------------------------->
// start of script 2
// end of script 2
// bye bye
// A
// B
// C

//CASE OF MICRO TASK QUEUE (PROMISES)------------------------------------>

console.log("start of script 3");

setTimeout(()=>{
    console.log("this is from task queue (setTimeout)");
},0);

Promise.resolve().then(()=>{
    console.log("this is from micro task queue (promise)");
});

console.log("end of script 3");

// Ans------------------------------------>
// start of script 3
// end of script 3
// this is from micro task queue (promise)
// this is from task queue (setTimeout)0