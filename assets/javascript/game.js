
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


                           
                    //         }  
                     //  }

                     // // };

 
                     // wrongGuess();                   
     
        
            document.getElementById("wordBlanks").textContent = letterBlanks.join(" ");    

            document.getElementById("lettersGuessed").textContent = wrongLetters.join(" , ");

            document.getElementById("remGuess").textContent = remainingGuesses; 


//Function to check if game is over -- if remaiming guesses < 1, restart the game

               

//  function gameOverCheck() {
                 
//      if (remainingGuesses === 0) {
//          gameWord();
//      }

//          if (correctGuesses = randomWord.length) {
//              wins ++
//              document.getElementById("wins").textContent = wins; 
//              gameWord();
//          }

//     }
//          gameOverCheck();
          

       
    };



      

    