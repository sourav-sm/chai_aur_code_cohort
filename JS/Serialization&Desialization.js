const Person={
    First_Name:"Sourav",
    Second_Name:"Mohanta",
    Address:{
        City:"Balurghat",
        State:"West Bengal",
        Country:"India",
    }
};

///Serialization
const SerilizedForm=JSON.stringify(Person);
console.log(SerilizedForm);

//Deserialization
const NormalForm=JSON.parse(SerilizedForm);
console.log(NormalForm);