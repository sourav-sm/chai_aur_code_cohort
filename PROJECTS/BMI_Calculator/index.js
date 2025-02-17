const ageinput=document.getElementById("age-val");
const weightinput=document.getElementById("weight-val");
const heightinput=document.getElementById("height-val");
const final_result=document.getElementById("final-result");
const bmi=document.getElementById('bmi-category');

const check=document.getElementById("check-btn");
check.addEventListener('click',()=>{
    const weight=weightinput.value;
    const height=heightinput.value;

    if(!weight || !height || weight==0 || height==0){
        final_result.innerText="Please Enter a Valid height or Weight"
        bmi.innerText='';
        return;    
    }

    const BMI=(weight/(height*height))*10000;
    console.log(BMI);

    final_result.innerText=`Your BMI is: ${BMI.toFixed(2)}`;
    
    let bmi_category='';
    if(BMI<18.5){
        bmi_category="Underweight";
    }
    else if(BMI>=18.5 && BMI<=24.9){
        bmi_category="Normal weight";
    }
    else if(BMI>=25 && BMI<=29.9){
        bmi_category="Overweight";
    }
    else if(BMI>=30){
        bmi_category="Obesity";
    }

    bmi.innerText=bmi_category;
  


    ageinput.value='';
    weightinput.value='';
    heightinput.value='';
})
