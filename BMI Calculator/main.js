
function updateHeightValue(){
    // select height value
    // select span  textcontent
    // update span text content
     document.getElementById("height-value").textContent = document.getElementById("height").value
}

function updateWeighttValue(){
      // select weight value
      // select span  textcontent
      // update span text content
     document.getElementById("weight-value").textContent = document.getElementById("weight").value
}


function calculateBMI(){
    // get weight
    // get height
    let height= document.getElementById("height").value
    let weight= document.getElementById("weight").value
    let gender = Array.from(document.querySelectorAll("input[name='gender']")).find(i => i.checked)?.value;
    let age = document.getElementById("age").value
    // make sure all inputs not empty
    if(!height ||!gender ||!age || !weight){
        alert("Please fill all fields");
    }
    else{
        // calc bmi
        bmi = (weight/((height/100)**2))
        // show output
        document.getElementById("bmi-result").textContent = bmi.toFixed(1)
        // make condtion to determine the category
        let category;
        if(bmi < 18.5){
            category="underweight"
        }
        else if (bmi < 24.5){
            category="normal weight"
        }
        else if (bmi < 29.9){
            category="overweight"
        }
        else{
            category="obese"
        }
        
         document.getElementById("bmi-category").textContent = category
    }
}