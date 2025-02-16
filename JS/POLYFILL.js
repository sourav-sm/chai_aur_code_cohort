//for older browser like internet explorer there
//ERROR: forEach funtion does not exist on arr variable

//step 1 Real signture ko samjo -No return function i
//myForeach
if(!Array.prototype.myforEach){
    Array.prototype.myforEach=function(userFun){
        const originalArr=this;//current object ke taref point karta hain
        for(let i=0;i<originalArr.length;i++){
            userFun(originalArr[i],i);
        }
    }
}
//myMap
if(!Array.prototype.myMap){
    Array.prototype.myMap=function(userFun){
        const result=[];
        for(let i=0;i<this.length;i++){
            const value=userFun(this[i],i)
            result.push(value)
        }
        return result;
    }
}

//myreduce
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {

        let acc = initialValue !== undefined ? initialValue : this[0];
        let startIndex = initialValue !== undefined ? 0 : 1; // If initialValue is undefined, start from index 1

        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(acc, this[i], i, this);
        }

        return accumulator;
    };
}




//myfilter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(userFun){
        const result=[];
        
        for(let i=0;i<this.length;i++){
            if(userFun(this[i]))
            result.push(this[i])
        }
        return result;
    }
}

//Ployfill myInclude()
if(!Array.prototype.myInclude){
    Array.prototype.myInclude=function(val){

        for(let i=0;i<this.length;i++){
            if(val===this[i])
                return true
        }
        return false;
    }
}


const arr=[1,2,3,4,5];


///signature .map

//return new array ,each element iterate,
const n=arr.map((e)=>e*2);
const n2=arr.myMap((e)=>e*3);
const n3=arr.myFilter((e)=>e%2===0)
console.log(n);
console.log(n2);
console.log(n3);
const n4=arr.filter((e)=>e%2===0)
console.log(n4)

const ans=arr.includes(3);
console.log(ans);

const ans1=arr.myInclude((3));
console.log(ans1);
const sum=arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
//
