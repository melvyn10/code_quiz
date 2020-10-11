var containerEl = document.querySelector(".container");
var highScoreListEl = document.querySelector("#highScoreList");

    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores != null) {
        var li;

        for (i=0; i<storedScores.length; i++) {
            li = document.createElement("li");
            li.textContent = storedScores[i].name + ": " + storedScores[i].score;
            highScoreListEl.appendChild(li);
        }
    }
    var backBtn = document.createElement("button");
    backBtn.setAttribute("type", "button");
    backBtn.setAttribute("id","button");
    backBtn.textContent = "Go Back";
    highScoreListEl.appendChild(backBtn);
    backBtn.addEventListener("click", function(){
        window.location.replace("./index.html");
    });

    var clearBtn = document.createElement("button");
    clearBtn.setAttribute("type", "button");
    clearBtn.setAttribute("id","button");
    clearBtn.textContent = "Clear Highscroes";
    highScoreListEl.appendChild(clearBtn);
    clearBtn.addEventListener("click", function(){
        localStorage.clear();
        location.reload();
    });
