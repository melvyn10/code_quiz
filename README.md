# code_quiz Homework 4 10/12/2020

Code quiz
This application consists of 3 html pages, 2 javascript files, and a style css file.
The application will prompt the user to start the quiz. Additionally, if the user wishes to see the highscores, there is a link to the high scores stored. Once the "Start Quiz" button is pressed, a timer will start counting down from 75 seconds. 

There are five questions (currently configured), the objective is to answer all the questions with the highest time remaining. For every wrong answer, a 15 seconds deduction will be taken.

Three HTML pages were create:
index.html
    this is the main page where it shows the instruction of the quiz. A link to the highscores is available and a button to start the quiz.

question.html
    This is the page where the questions and potential answers are loaded from the array of objects. The page also is "listening" for the user to click on one of the answers. If the answer is correct or incorrect, a notification will be given.

highScore.html
    This page is used to list the high scores stored. Note that the scores are sorted by highest to lowest. A function was create to do this. Additionally, two buttons are available to go back to the inde page and to clear the local storage.


The mobile responsive webpage consists of the following:

	One stylesheets (CSS)
	
		-One created specifically for the webpages
	
		
	Two Java scripts
	
		-script.js
           	This javascript contains the majority of the functions.
                Functions to "read" the question, possible answers and check if answer is correct or not. 
                Functions to check if the game is over by either checking the time or at the end of the total questions
                Functions to  update the high score, this request the user to enter their initals and then updates the local storage. 
		The function  "sorts" the scores by using "splice" to splice the array and insrt the score in the appropriate location
       		
		-highScoreScript.js
            	This javascript contains the function to read from the local storage and create a list on the highscore.html. 
	    	It also creates two button, one to go back to the index page and one to clear the local storage
		
		
The following were implemented:
the code to include semantic elements

	Header
	Section
	
	
Added appropriate comments to the style file to ensure legibility

This code has been validated by W3C Markup Validation Service and error/warnings are corrected or understood.

Installation instruction

-Create a GitHub account on github.com.
-Create a new repository in your GitHub application. 
-Download the files
-Publish the website in GitHub

<img width="964" alt="mainPage" src="https://github.com/melvyn10/code_quiz/blob/main/images/codeQuiz-mainPage.jpg">

<img width="964" alt="questionPage" src="https://github.com/melvyn10/code_quiz/blob/main/images/codeQuiz-questionPage.jpg">

<img width="964" alt="highscorePage" src="https://github.com/melvyn10/code_quiz/blob/main/images/codeQuiz-highscorePage.jpg">
