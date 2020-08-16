var firstNumber = document.getElementById("first-number");
var secondNumber = document.getElementById("second-number");
var operationSign = document.getElementById("col-sign");
var input = document.getElementById("input");
var timeLeft = document.getElementById("insert-time");
var divTimeadded = document.getElementById("time-added");
var divScore = document.getElementById("score");
var score = 0;
var randomNumbers = [];
var i = 10;
var range = document.getElementById("numRange");
var label = document.getElementById("label");
var valueRange = 10;


// Label range

range.oninput = function(){
    label.innerHTML = this.value;
    valueRange = this.value;
}


// generatenumbers

var generateNumbers = function () {
    console.log(valueRange)
    var number1 = Math.floor(Math.random() * valueRange);
    var number2 = Math.floor(Math.random() * valueRange);

    firstNumber.innerHTML = number1;
    secondNumber.innerHTML = number2;
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
        divTimeadded.innerHTML = "+ 1 second"
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
        clearInterval();
        timeLeft.innerHTML = "You lose"
    }

    divTimeadded.innerHTML =""
}


document.getElementById("start-btn").onclick= function(){
    generateNumbers(); 
    setInterval("showTimeLeft()", 1000)}

document.getElementById("try-again-btn").onclick = function(){
    window.location.reload();
}

var range = document.getElementById("numRange");
var label = document.getElementById("label");
