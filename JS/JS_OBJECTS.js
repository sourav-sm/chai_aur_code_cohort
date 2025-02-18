const obj1={
    fname:"Sourav",
    lname:"Mohanta"
};

const obj2={
    fname:"Ram",
    lname:"Mohanta"
}

///BETTER WAY OF DOING ABOVE THING JUST BY CREATING A Class 

class Person{
  constructor(fname,lname){
    this.fname=fname;
    this.lname=lname;
  }

  getfullName(){
    return `${this.fname}` `${this.lname}`;
  }
}

const p1=new Person('Sourav','Mohanta');
const p2=new Person ('Ram', 'Mohanta');

console.log(p1.getfullName);
console.log(p2.getfullName);

//******** */

// INterview question How can we use property of one class in another class ?
