
$(document).ready(function () { 

   
//  <!-- Define variables -->
   
    var wordList = ["pitcher", "foul", "homerun", "bat", "strike", "glove", "out"]  
    
    var remainingGuesses =  12;
    var correctGuesses = 0;
    var wins = 0;  
    var losses = 0;
    var letterBlanks = [];
    var wrongLetters = [];

    var randomWord;
    
//Display number of wins and remaining guesses

document.getElementById("wins").textContent = wins;

document.getElementById("losses").textContent = losses;

document.getElementById("remGuess").textContent = remainingGuesses; 

//Launch function to select a random word and start game

gameWord();

//Reset variables and restart game 

    function gameStart() {
        var remainingGuesses =  12;
        var correctGuesses = 0;
        var letterBlanks = [];
        var wrongLetters = [];

        document.getElementById("outcome").textContent = "";
        document.getElementById("remGuess").textContent = remainingGuesses; 
        document.getElementById("lettersGuessed").textContent = wrongLetters.join(" , ");
        console.log(letterBlanks)
        console.log("new game")

        gameWord();
    }

//Generate a random word from the wordList array

    function gameWord() {
       
        remainingGuesses =  12;
        correctGuesses = 0;
        letterBlanks = [];
        wrongLetters = [];

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(randomWord);

// Display characters of the random game word as blanks on screen
        
         for (var i = 0; i < randomWord.length; i++) {

             letterBlanks.push("_");
         };
         
         document.getElementById("wordBlanks").textContent = letterBlanks.join(" ");
       

             console.log(letterBlanks)

         };

     

//Check if key pressed is a match for any of the letters in the random word
         document.onkeyup = function (event) {

             userGuess = event.key;

             var match =false;

//Search and compare to each letter in the word by its place in the array - index position

                 if (randomWord.indexOf(userGuess) > -1) {
                     
                     for (var j = 0; j < randomWord.length; j++) {

                         if (randomWord[j] === userGuess) {
                             letterBlanks[j] = userGuess;
                             (match = true) 
                             correctGuesses++;    
                             console.log("#correct: " + correctGuesses)
                         }     
                       }                 
                    }
                    remainingGuesses--; 
                    wrongLetters.push(userGuess)
                               
 //Update game display
        
        document.getElementById("wordBlanks").textContent = letterBlanks.join(" ");  
        document.getElementById("lettersGuessed").textContent = wrongLetters.join(" , ");
        document.getElementById("remGuess").textContent = remainingGuesses; 
   
//Check if game is over and if player wins or loses
        if (correctGuesses === randomWord.length)   {
            wins++
            document.getElementById("wins").textContent = wins;
            document.getElementById("wordBlanks").textContent = randomWord;
            document.getElementById("outcome").textContent = "You Win! Play Again.";
            console.log("you win");
            setTimeout(gameStart, 2000);    
         } 

         else if (remainingGuesses === 0) {
            losses++
            document.getElementById("losses").textContent = losses;
            document.getElementById("outcome").textContent = "You're out! Try Again.";
            console.log("you lose");
            setTimeout(gameStart, 2000);  
        }   
    };
        
 })



      

    