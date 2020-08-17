var firstNumber = document.getElementById("first-number");
var secondNumber = document.getElementById("second-number");
var operationSign = document.getElementById("col-sign");
var input = document.getElementById("input");
var timeLeft = document.getElementById("insert-time");
var divScore = document.getElementById("score");
var score = 0;
var randomNumbers = [];
var i = 10;
var range = document.getElementById("numRange");
var label = document.getElementById("label");
var valueRange = 10;
var firstRow = document.getElementById("first-row")

// Label range

range.oninput = function () {
    label.innerHTML = this.value;
    valueRange = this.value;
}


// generatenumbers

var generateNumbers = function () {
    console.log(valueRange)
    var number1 = Math.floor(Math.random() * valueRange);
    var number2 = Math.floor(Math.random() * valueRange);

    if(number1===0){
        number1=10;
    }
    if(number2===0){
        number2=10;
    }

    firstNumber.innerHTML = number1;
    secondNumber.innerHTML = number2;
    operationSign.innerHTML= "+"
    randomNumbers.push(number1);
    randomNumbers.push(number2);   
}

// function to checkAnswer
var checkAnswer = input.addEventListener("keyup", function () {
    var value = Number(this.value);

    if (value === randomNumbers[0] + randomNumbers[1]) {
        randomNumbers = [];
        i++;
        score++;
        divScore.innerHTML = score;
        generateNumbers();
        input.value = "";

    }
})

function showTimeLeft() {

    timeLeft.innerHTML = i + " seconds"
    var value = Number(input.value);
    i--;

    if (i < 0) {
        firstRow.setAttribute("class", "text-center time-is-up")
        firstRow.innerHTML = ("<img src=./imgs/contagem.png>") + "Time is up!"
        document.getElementById("start-btn").style.display="none"
        document.getElementById("try-again-btn").style.display="inline"

        clearInterval(interval);
    }

    if(i<6 && i>3){
        timeLeft.style.color = "yellow";
    }

    if(i<3 && i>=0){
        timeLeft.style.color= "red";
    }
    

}

var interval= undefined;

document.getElementById("start-btn").onclick = function () {
    generateNumbers();
    interval = setInterval("showTimeLeft()", 1000)
    this.disabled=true;
}

document.getElementById("try-again-btn").onclick = function () {
    window.location.reload();
}

var range = document.getElementById("numRange");
var label = document.getElementById("label");
