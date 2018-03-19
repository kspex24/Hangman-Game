//Initialize screen and game, reset variables to original values

// $(document).ready(function () { 

// function startGame() {
   
    //  <!-- Define variables -->
   
       var wordList = ["pitcher", "foul", "homerun", "bat", "strike", "inning", "ball"]
       
       var remainingGuesses =  12;
       
       var correctGuesses = 0;

       var wins = 0;  
       
       var letterBlanks = [];

       var wrongLetters = [];

       var randomWord;
       
//Display number of wins and remaining guesses

    document.getElementById("wins").textContent = wins;

    document.getElementById("remGuess").textContent = remainingGuesses; 
   
//Generate a random word from the wordList array

        function gameWord() {
        
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];

        console.log(randomWord);
   
// Display characters of the random game word as blanks on screen
   
            for (var i = 0; i < randomWord.length; i++) {

                letterBlanks.push("_");
            };

                document.getElementById("wordBlanks").textContent = letterBlanks.join(" ");

                console.log(letterBlanks)

            };

            gameWord();


            document.onkeyup = function (event) {

                userGuess = event.key;

                    if (randomWord.indexOf(userGuess) > -1) {
                        
                        for (var j = 0; j < randomWord.length; j++) {

                            if (randomWord[j] === userGuess) {
                                letterBlanks[j] = userGuess; 
                                correctGuesses++;
                                console.log(correctGuesses);         
                            }
                            
                        };
                        
                    };
                            
                       

                        // function wrongGuess () {

                        //     // if (randomWord.indexOf(userGuess) > -1) {
                        
                        //     //     for (var j = 0; j < randomWord.length; j++) {
        
                        //     //         if (randomWord[j] != userGuess) {
                                        var wrong = userGuess
                                        remainingGuesses--;
                                        wrongLetters.push(wrong);
                        //                 console.log(wrongLetters)
                        //         }  
                        //  }

                        // // };

    
                        // wrongGuess();                   
        
           
                        document.getElementById("wordBlanks").textContent = letterBlanks.join(" ");    

            document.getElementById("lettersGuessed").textContent = wrongLetters.join(" , ");

            document.getElementById("remGuess").textContent = remainingGuesses; 

             }



        //    else if (correctGuesses === randomWord.length)
    // function gameOverCheck() {
                    
    //     if (remainingGuesses < 1) {
    //         alert("Game Over!")
    //         // startGame();
    //     }

    //         else if (correctGuesses = randomWord.length) {
    //             alert("Congratulations!  You won!")
    //             wins ++
    //             document.getElementById("wins").textContent = wins; 
                // startGame();

            // } 
            
                // else {
                //     letterCompare();
                // }
        
    // };

                    
  //Compare key pressed to letters in randomWord string (letterArray) for match
   //      If user guess = letter that user guesses, it is the new value of the letter 
   //      else user guess is added to the lettersGuessedArray 

//    function correctGuess() {
                     
//     var str = document.getElementById("wordBlanks").textContent; 
//     var letterUpdates = str.replace(dispBlanksArray[j], letterArray[j]);
//     document.getElementById("wordBlanks").innerHTML = letterUpdates;
//     correctGuesses ++;
//     console.log("Correct guesses: " + correctGuesses)  
//     console.log(randomWord.length)   
    
//         //  function winCheck() {
                    
//         // if (correctGuesses = randomWord.length) {
//         //                 alert("Congratulations!  You won!")
//         //                 wins ++
//         //                 document.getElementById("wins").textContent = wins 
//         //                 // startGame();
//         //                 winCheck() 
//         //             }
//         //         }
// };


// //function to run if letter guessed by user is not a match

// function wrongGuess() {
  
//     remainingGuesses--;
//     document.getElementById("remGuess").textContent = remainingGuesses;

//     lettersGuessedArray.push(lettersGuessed + userGuess);
//     document.getElementById("lettersGuessed").textContent = lettersGuessedArray;

//     console.log(lettersGuessedArray)

  
    // function lossCheck() {
                    
    //     if (remainingGuesses < 1) {
    //         alert("Game Over!")
    //         // startGame();
    //     }

    //         else if (correctGuesses = randomWord.length) {
    //             alert("Congratulations!  You won!")
    //             wins ++
    //             document.getElementById("wins").textContent = wins; 
    //             // startGame();
    //         }
    // };    
// };  
//    for (var j = 0; j < randomWord.length; j++) {
   
//             if (userGuess === letterArray[j]) {
//                 (letterArray[j] = userGuess)
//                 console.log("match: " + [j] + "  " + letterArray[j])
//                 correctGuess();
//             }     
                    
//             else  { 
//                 console.log("false")  
//                 wrongGuess();   
//             }   

//          };    


    //function to run if letter guessed by user is match         

 //Function to check if game is over -- if remaiming guesses < 1, restart the game
       

            
    
   