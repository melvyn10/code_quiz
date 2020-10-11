var containerEl = document.querySelector(".container");
var listEl = document.querySelector("#answer-list");
var questionEl = document.querySelector("#question-body");
var answerEl = document.querySelector("#answer");
var timeEl = document.querySelector(".time");

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
var currentName = "";
var penalty = 15;
var timerInterval = 0;

var maxScores=100;
var highScores = [];


function startGame() {
    setTime();
    if ( currentScore > 0 ) displayQuestion();
}

function displayQuestion() {
    questionEl.innerHTML = "";
    var tag = document.createElement("h1");
    tag.textContent=questionList[currentQuestion].question;
    questionEl.appendChild(tag);
    
    for (i=0; i<questionList[currentQuestion].choices.length; i++) {
        tag = document.createElement("li");
        tag.textContent = questionList[currentQuestion].choices[i];
        tag.addEventListener("click", (checkAnswer));
        questionEl.appendChild(tag);
    }
}

async function checkAnswer(event) {
    answerEl.innerHTML="";
    var element = event.target;
    var tag = document.createElement("div");
    if (questionList[currentQuestion].answer == element.textContent ) {
        tag.textContent = "you are correct, the answer is " + questionList[currentQuestion].answer;
    } 
    else {
        tag.textContent = "WRONG!, the answer is " + questionList[currentQuestion].answer;
        currentScore = currentScore - penalty;
    }
    answerEl.appendChild(tag);
    currentQuestion++;
    if (currentScore > 0 && currentQuestion < questionList.length) {
        displayQuestion();
    }
    else {
        gameOver();
    }

}

function gameOver () {
    clearInterval(timerInterval);

    questionEl.innerHTML="";
    var tag = document.createElement("h1");
    tag.textContent="All done!";
    questionEl.appendChild(tag);
    tag = document.createElement("h2");
    tag.textContent=("Your final score is " + currentScore);
    questionEl.appendChild(tag);
    
    var label = document.createElement("label");
    label.setAttribute ("id","nameLabel");
    label.textContent = "Enter initials: ";
    questionEl.appendChild(label);
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "name");
    input.textContent = "";
    questionEl.appendChild(input);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "Submit");
    submitBtn.setAttribute("id","Submit");
    submitBtn.textContent = "Submit";
    questionEl.appendChild(submitBtn);

    submitBtn.addEventListener("click", function(){
        currentName = input.value;
        
        updateHighScore();
    });
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
    questionEl.innerHTML="";
    answerEl.innerHTML="";
    var tag = document.createElement("h1");
    tag.textContent="Highscores";
    questionEl.appendChild(tag);

    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores != null) {
        var li;

        for (i=0; i<storedScores.length; i++) {
            li = document.createElement("li");
            li.textContent = storedScores[i].name + ": " + storedScores[i].score;
            questionEl.appendChild(li);
        }
    }
    var backBtn = document.createElement("button");
    backBtn.setAttribute("type", "button");
    backBtn.setAttribute("id","button");
    backBtn.textContent = "Go Back";
    questionEl.appendChild(backBtn);
    backBtn.addEventListener("click", function(){
        window.location.replace("./index.html");
    });

    var clearBtn = document.createElement("button");
    clearBtn.setAttribute("type", "button");
    clearBtn.setAttribute("id","button");
    clearBtn.textContent = "Clear Highscroes";
    questionEl.appendChild(clearBtn);
    clearBtn.addEventListener("click", function(){
        localStorage.clear();
        displayHighScore();
    });
}

function updateHighScore() {
    var newScore = {
        score: currentScore,
        name: currentName
    };

    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores != null) {
        highScores = storedScores;
        if (parseFloat(currentScore) <= parseFloat(highScores[highScores.length-1].score)) {
            /* 
            ** lower than existing stored scores
            */
            if (parseFloat(currentScore) < 0) currentScore = 0;
            highScores.push(newScore);
            }
        else {
            for (i=0; i< highScores.length; i++) {
                if (parseFloat(currentScore) > parseFloat(highScores[i].score)) {
                    highScores.splice(i, 0, newScore);
                    break;
                }
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
    displayHighScore();
}

startGame();





