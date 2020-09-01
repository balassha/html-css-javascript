document.addEventListener("DOMContentLoaded", function(event) { 
    var rand = Math.floor(Math.random()*100)+1;
    var guessCount = 1;

    var button = document.querySelector(".userButton");
    var status = document.querySelector("#status");
    var userValue = document.querySelector(".userValue");
    var previousGuess = document.querySelector("#previousGuess");
    var hiOrLow = document.querySelector("#hiOrLow");
    function checkGuess (){
        if (guessCount === 10) {
            status.textContent = "Game Over !!"
            status.style.backgroundColor = "red";
            status.style.color = "white";
        }
        if (userValue.value == rand){
            status.textContent = "Congrats ! Correct Answer !!"
            status.style.backgroundColor = "green";
            status.style.color = "white";
            hiOrLow.textContent="";
        }else if(userValue.value > rand){
            status.textContent = "Wrong Guess"
            status.style.backgroundColor = "yellow";
            hiOrLow.textContent="Your guess is Higher than the Number";
            status.style.color = "black";
        }else{
            status.textContent = "Wrong Guess"
            status.style.backgroundColor = "yellow";
            hiOrLow.textContent="Your guess is Lower than the Number";
            status.style.color = "black";
        }
        guessCount++;
    }
    button.addEventListener('click',checkGuess);
  });

