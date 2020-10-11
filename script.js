var containerEl = document.querySelector(".container");
var listEl = document.querySelector("#answer-list");
var questionEl = document.querySelector("#question-body");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var questionList = [ 
    {question: "Q1",
    choices: ["A1", "A2", "A3", "A4"],
    answer: "A1"},
    {question: "Q2",
    choices: ["A1", "A2", "A3", "A4"],
    answer: "A2"},
    {question: "Q3",
    choices: ["A1", "A2", "A3", "A4"],
    answer: "A1"},
    {question: "Q4",
    choices: ["A1", "A2", "A3", "A4"],
    answer: "A2"},
    {question: "Q5",
    choices: ["A1", "A2", "A3", "A4"],
    answer: "A2"}
];

var currentQuestion = 0;
var currentScore = 75;
var penalty = 10;
var timerInterval = 0;

var maxScores=100;
var highScores = [];


function startGame() {
    setTime();
    if ( currentScore > 0 ) displayQuestion();
}

function displayQuestion() {
    questionEl.innerHTML="";
    var tag = document.createElement("h1");
    tag.textContent=questionList[currentQuestion].question;
    questionEl.appendChild(tag);
    
    for (i=0; i<questionList[currentQuestion].choices.length; i++) {
        tag = document.createElement("li");
        tag.textContent = questionList[currentQuestion].choices[i];
        tag.addEventListener("click", (checkAnswer));
        //tag.setAttribute
        questionEl.appendChild(tag);
    }
}

function checkAnswer(event) {
    var element = event.target;
    var tag = document.createElement("div");
    if (questionList[currentQuestion].answer == element.textContent ) {
        tag.textContent = "you are correct, the answer is " + questionList[currentQuestion].answer;
    } 
    else {
        tag.textContent = "WRONG!, the answer is " + questionList[currentQuestion].answer;
        currentScore = currentScore - penalty;
    }
    questionEl.appendChild(tag);
    setTimeout(function(){
        /* wait a second */
        alert("wait");
    },2000);
    currentQuestion++;
    if (currentScore > 0 && currentQuestion < questionList.length) {
        displayQuestion();
    }
    else {
        gameOver();
    }

}

function gameOver () {
    alert ('Game Over!');
    clearInterval(timerInterval);
    questionEl.innerHTML="";
    var tag = document.createElement("h1");
    tag.textContent="All done!";
    questionEl.appendChild(tag);
}

function setTime() {
    timerInterval = setInterval(function() {
    currentScore--;
    timeEl.textContent = "Time: " + currentScore;

    if(currentScore === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function displayHighScore() {
    var tag = document.createElement("h1");
    tag.textContent="Highscores";
    questionEl.appendChild(tag);

    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores != null) {
        var li = document.createElement("li");
        li.textContent = highScores;
        questionEl.appendChild(li);
    }
}

function updateHighScore() {
    var newScore = {
        score: currentScore,
        name: currentName
    };
    var pos = 0;

    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores != null) {
        highScores = storedScores;

        for (i=0; i< highScores.length; i++) {
            if (parseFloat(currentScore) > parseFloat(highScores[i].score)) {
                highScores.splice(i, 0, newScore);
                break;
                }
            }
        localStorage.setItem("highScores", JSON.stringify(highScores));
        }
    else {
        /*
        ** first score
        */
        highScores[0] = newScore;
        localStorage.setItem("highScores", JSON.stringify(highScores));
        }
}

startGame();
//updateHighScore();
//displayHighScore();




