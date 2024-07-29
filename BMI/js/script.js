const weightValue = document.getElementById("weight")
const heightValue = document.getElementById("height")
const finalBMI = document.getElementById("result")
const pElem = document.getElementById("category")
const weightP = document.getElementById("weight-val")
const heightP = document.getElementById("height-val")
heightValue.addEventListener('input',BMICalc)
weightValue.addEventListener('input',BMICalc)
 let height,weight,BMI



function BMICalc(){
    height = heightValue.value
    weight = weightValue.value
    height /= 100
    BMI = weight / (height **2)
    finalBMI.innerHTML = BMI.toFixed(2)
    if(BMI < 18.5){
        finalBMI.style.color = "yellow"
        pElem.innerHTML = 'Underweight'
    }else if(BMI >= 18.5 && BMI <24.9){
        finalBMI.style.color = "green"
        pElem.innerHTML = 'normal'
    }else if(BMI >= 24.9 && BMI <29.5){
        finalBMI.style.color = "orange"
        pElem.innerHTML = 'Overweight'
    }else if(BMI>=29.5){
        finalBMI.style.color = "red"
        pElem.innerHTML = 'Obese'
    }
    heightP.innerHTML = Math.floor(height*100) + ' ' + 'cm'
    weightP.innerHTML = weight + ' '+'kg'
}
