# Hangman-Game

https://kspex24.github.io/Hangman-Game/

Project Description:

This is a hangman game created using JavaScript, HTML and 
CSS/Twitter Bootstrap.  It has a baseball theme for the word bank.


How does it work?
First, the program will generate a random word from the word bank.  Then, blanks for each letter will be displayed on the screen, along with counters for # of remaining guesses, # of wins, and remaining letters.

The screen instructions will tell the user to start the game by guessing a letter using the keyboard.  The program will compare the key pressed to the letters in the random word. If there is a match, the letter will replace the blank(s) on screen.

The user will have 12 guesses to come up with the correct letters to complete the word.  For each incorrect guess, the counter for remaining guesses will deduct one guess and update on the screen.  The incorrect letters guessed will also display on the screen. The correct letters guessed will also be tallied and stored in an array.

The game will conclude and restart when either the remaining guesses are equal to 0 or the length of the word is equal to the number of correct letters.  The game will re-initialize the remaining guesses variable, clear out the wrong letters guessed array and generate a new random word and display the blanks on the screen.


Who will use this repo or project?

This project is a homework assignment for the second week of Coding Bootcamp for full-stack developers at Georgia Tech.

What is the goal of this project?

The goal of this project is to test our newly learned JavaScript, HTML, and CSS skills.
