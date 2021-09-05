const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBMI = () => {
    const enteredHeight = +heightInput.value /100;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    document.getElementById("result-viewer").style.display= "block";

    document.getElementById("result-container-1").innerHTML = bmi;
    if(bmi<18.5){
        document.getElementById("result-container-2").innerHTML = "KURUS";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("result-container-2").innerHTML = "NORMAL";
    }else if(bmi >= 2.5 && bmi <= 29.9){
        document.getElementById("result-container-2").innerHTML = "GEMUK";
    }else if(bmi >= 30.0){
        document.getElementById("result-container-2").innerHTML = "OBESITAS";
    }

    console.log(bmi);
}
const reset = () => {
    heightInput.value = null;
    weightInput.value = null;
    document.getElementById("result-viewer").style.display= "none";
}

calculateBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', reset);