const teas=["red tea","milk tea",'olong tea',"black tea","green tea","harval tea"];

//Problem: Remove the olong tea from tea list
const index=teas.indexOf("olong tea");
if(index>1){
    teas.splice(index,1);
}
console.log(teas);

//Problem: filter the list to only include teas those are caffinated(ex-harval tea is not caffinated)
const caffinatedTea=teas.filter(it=>it!=="harval tea");
console.log("caffinated tea is",caffinatedTea);

//Problem:sort the tea alphabatically
const sortedTea=teas.sort();
console.log("sorted tea",sortedTea);

//Problem: use a for loop to print elements of the array
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}

//Problem :use a for loop to count how many is caffinated (exclude "herbal tea")
let count=0;
for(let i=0;i<teas.length;i++){
    if(teas[i]!=="harval tea"){
        count++;
    }
}

console.log("count of caffinated tea",count);

//Problem: use a for loop to create a new array with all tea names in uppercase
const uppercaseTea=[];
for(let i=0;i<teas.length;i++){
    uppercaseTea.push(teas[i].toUpperCase());
}

console.log("upper case tea",uppercaseTea);

//Problem: use a for loop to find the tea name with the most characters;
let longestTea="";
for(let i=0;i<teas.length;i++){
    if(teas[i].length>longestTea.length){
        longestTea=teas[i];
    }
}
console.log("longest tea",longestTea);

//Problem : use a for loop to reverse the order of teas 
const reverseTea=[];
for(let i=teas.length-1;i>=0;i--){
    reverseTea.push(teas[i]);
}
console.log("Reverse tea is ",reverseTea);

const x=10;
console.log(x);