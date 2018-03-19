//Initialize screen and game, reset variables to original values

$(document).ready(function () { 

// function startGame() {
   
    //  <!-- Define variables -->
   
       var wordList = ["pitcher", "foul", "homerun", "bat", "strike"]
       
       var remainingGuesses =  12;
   
       var wins = 0;   
       
       var correctGuesses = 0

      
       
    //Display number of wins and remaining guesses

    document.getElementById("wins").innerHTML = wins;


    document.getElementById("remGuess").innerHTML = remainingGuesses; 
   
   //Generate a random word from the wordList array
   
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

        console.log(randomWord);
   
   //Split word into separate characters
   
       var letterArray = randomWord.split("");
   
       console.log(letterArray);
   
       // Display characters as blanks on screen
   
         var dispBlanksArray = [];
         
         var dispBlanks = "";
   
         for (var i = 0; i < randomWord.length; i++) {
       
              dispBlanks = dispBlanks + " _ ";   
              dispBlanksArray.push("_"); 
             
           };
   
           document.getElementById("wordBlanks").innerHTML = dispBlanks;
   

        // };
//    startGame();

   
// // This function is run whenever the user presses a key.

document.onkeyup = function(event) {  
   
        // //  Determines which key was pressed and stores as userGuess.
        
            var userGuess = event.key.toLowerCase();
             
            var lettersGuessed = "";

            var lettersGuessedArray= [];  

            var match = false
                    
  //Compare key pressed to letters in randomWord string (letterArray) for match
   //      If user guess = letter that user guesses, it is the new value of the letter 
   //      else user guess is added to the lettersGuessedArray 
   
   for (var j = 0; j < randomWord.length; j++) {
   
            if (userGuess === letterArray[j]) {
                   
                    match = true
                    console.log("match: " + [j] + "  " + letterArray[j])
                    correctGuess();
            }
      
                    
            else  { 
                console.log("no match")
                wrongGuess();   
            }                     
    };    

   
    //function to run if letter guessed by user is match         
            function correctGuess() {

                         (letterArray[j] = userGuess)
                        var str = document.getElementById("wordBlanks").innerHTML; 
                        var letterUpdates = str.replace(dispBlanksArray[j], letterArray[j]);
                        document.getElementById("wordBlanks").innerHTML = letterUpdates;
                        correctGuesses ++;
                        console.log("Correct guesses: " + correctGuesses)                  
                        // gameOverCheck();   
                    };

                   
    //function to run if letter guessed by user is not a match

            function wrongGuess() {
                        (lettersGuessed = userGuess)
                        remainingGuesses--;
                        document.getElementById("remGuess").innerHTML = remainingGuesses;
                        lettersGuessedArray.push(lettersGuessed);
                        document.getElementById("lettersGuessed").innerHTML = lettersGuessedArray;
                        // gameOverCheck();
                };   


 //Function to check if game is over -- if remaiming guesses < 1, restart the game

            // function gameOverCheck() {
                            
            //     if (remainingGuesses < 1) {
            //         alert("Game Over!")
            //         // startGame();
            //     }

            //         else if (correctGuesses = randomWord.length) {
            //             alert("Congratulations!  You won!")
            //             wins ++
            //             document.getElementById("wins").innerHTML = wins; 
            //             // startGame();

            //         } 
                    
            //             // else {
            //             //     letterCompare();
            //             // }
               
            // };
    }  
            
   });
    
   