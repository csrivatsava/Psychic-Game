// <script type="text/javascript">
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a","b","c","d","e","f"]
//,"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesleft = 9;
    var yourGuess= [];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      //pushing the values into the array.
      yourGuess.push(userGuess);
      
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number
      if (userGuess === 'Enter'){
        yourGuess = [];
        }
        else {
          if (guessesleft !== 0){
            if (userGuess === computerGuess) {
                wins++;
                guessesleft=9;
                yourGuess = [];
              }
              else{
                guessesleft--;
              }
            }
            if (guessesleft === 0){
                  losses++;
                  guessesleft = 9;
                  yourGuess = [];
              }
        }
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        console.log(yourGuess)
          var html =
          "<h1> Psychic Game </h1> " +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesleft + "</p>" +
          "<p>Your Guesses so far: " + yourGuess + "</p>"
       
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#PsychicGame").innerHTML = html
      }
  // </script>