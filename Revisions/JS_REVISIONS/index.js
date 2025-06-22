console.log("BASICS");
//perform 45*20-10 and return result

console.log("45*20-10");//45*20-10
console.log(45*20-10);890

//use condole.log() to display current year
const currDate= new Date();
console.log(currDate.getFullYear());

//create two varibale first and last name concatenate them and log them
const first="sourav";
const last="mohanta";
console.log(first+" "+last);

//track the value of variable by logging its value before and after updating it
var a=1;
console.log(a);
a=5;
console.log(a);

//use console.error to simulate the error message
console.error("something went wrong");

//console.log(square of 12)
console.log(12*12);

//print the type of a variable holding a value
var b=true;
console.log(typeof b);

//create a variable holding your age and return wether it is greater than 18 or not
const age=22;
if(age>18){
    console.log("greater than 18");
}else{
    console.log("less than 18")
}

//Log the output of 100/0 and overser the output 
console.log(100/0);



/****VARIBALES AND DATA TYPES */
console.log("VARIBALES AND DATA TYPES");
//declare a variable using let and log it value
let c=20;
console.log(c);

//create a const and stored value of pi and log it
const pi=3.14
console.log(pi);

//reassign a value to a variable declared with let and log it
c=30;
console.log(c);

//check type of null and print it 
console.log("type of null",null)

//create three variable of type sting,boolen,number and log them
var num=1,bl=true,ch="hello";
console.log(num," ",bl," ",ch);


//create a variable with number as string value and log it type
var s="25";
console.log(typeof s);

//Declare a variable with out assigning its value and check its type
var d;
console.log(typeof d);//undefined

console.log(typeof NaN);//number
console.log(typeof null);//object
console.log(typeof typeof 1);//string

let e=undefined;
console.log(typeof e);//undefined

//use const to create an array try to reassign them and observe the error
const arr=[25,56,89,10];
arr[0]=59;
console.log(arr);

//HENCE IN CONST VARIBALES WE CAN UPDATE THEM BUT NOT REASSIGN THEM


//******************************************LOOPS */
console.log("LOOPS");
//wr1ite a for loop to print number from 1 to 51;
for(var i=1;i<=51;i++){
    console.log(i," ");
} 

//use for of method to print all character of javascript
var st="javascript";
for(let ch of st){
    console.log(ch);
}

//use a do while loop to print number from 5 to 1
let f=5;
do {
    console.log(f--);
} while (f>0);


//use for in loop to itrate over over th object and log its keys
const obj={
  name:"sourav",
  email:"s@gmail.com",
  age:"22"
}

for(let key in obj){
    console.log(key);
}



//SHORT MCQ QUESTIONS
var a=Math.max()<Math.min();
var b=Math.max()>Math.min();
console.log(a);//true
console.log(b);//false

//The parseInt() method converts a string to an integer if it is possible. If the string starts with a number, it will convert that numeric part and return it. Else, it will return NaN.
print(parseInt("123Hello"));
print(parseInt("Hello123"));
//ans-123 NAN

(function(a){
 return (function(){
   console.log(a);
   a = 6;
 })()
})(21);//21
// Even though a is defined in the outer function, due to closure, inner functions have access to it.

//Q What keyword is used to check whether a given property is valid or not?
//in 

//Q What does the ‘toLocateString()’ method do in JS?
//









