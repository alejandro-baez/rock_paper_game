function computerPlay() {
    let rand = Math.floor(Math.random()*(3)+1); //creating a random num between 1 to 3 including both

    let comp;
    
    //if else statement that connects each number to rock paper or scissor
    if(rand == 1) {
        comp= 'Rock';
    }
    else if(rand == 2){
        comp= 'Paper';
    }
    else{
        comp= 'Scissors';
    }

    return comp; 
   // console.log(comp); //Figure out diff between return and console.log
}

//let computerSelection=computerPlay();
computerPlay();


/* WORKS!!!! Alternative to PlayRound()
function playRound(){
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors");

    let outcome='';
    let winner='';

    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")){
        outcome = "You Win! " + playerSelection + " beats " + computerSelection;
        winner = "Player";
    } else if(playerSelection == computerSelection){
        outcome = "You Tie! " + computerSelection + " is the same as " + playerSelection;
        winner = "None";
    } else {
        outcome = "You Lose! " + computerSelection + " beats " + playerSelection;
        winner = "Computer";
    }

    return outcome;
    //console.log(outcome); Better not to use this atm


}

*/

//Keeping Score
let playerCounter = document.getElementById("playerCounter");
let compCounter = document.getElementById("compCounter");

let playerScore = 0;
let compScore = 0;

//Round Winner Announcement
let roundAnnouncement = document.getElementById("roundAnnouncement");

let winAnnouncement = document.getElementById("winAnnouncement");

//FOR TMM TRY SHOWING WHAT YOU AND THE COMPUTER CHOSE
//LET IT RUN UNTIL WINNER WINS 5 

function playRound(playerSelection, computerSelection){
    let outcome='';
    let winner='';
    //playerSelection;
    //computerSelection=computerPlay();

    if (
        (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") || 
        (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") || 
        (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK")
    ) { 
        //outcome = "You Win! " + playerSelection + " beats " + computerSelection;
        //winner = "Player";

        playerScore += 1;
        playerCounter.innerHTML = playerScore;
        roundAnnouncement.innerHTML= "YOU WON THIS ROUND!";

        if(playerScore ==5){
            winAnnouncement.innerHTML = "GAME OVER! Player WON GAME";
        //    document.body.removeEventListener("click", playRound);
            removeClick();
            tryAgain.removeAttribute("disabled");
        }

    } 
    else if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        //outcome = "You Tie! " + computerSelection + " is the same as " + playerSelection;
        //winner = "None";
        roundAnnouncement.innerHTML = "TIE! TRY AGAIN";
        
    } 
    else {
        //outcome = "You Lose! " + computerSelection + " beats " + playerSelection;
        //winner = "Computer";
        compScore +=1;
        compCounter.innerHTML = compScore;
        roundAnnouncement.innerHTML = "YOU LOST THIS ROUND!";
        
        if(compScore == 5){
            winAnnouncement.innerHTML = "GAME OVER! Computer WON GAME";
        //    document.body.removeEventListener("click", playRound);
            removeClick();
            tryAgain.removeAttribute("disabled");
        }
    }

    //return {    //If you cant store the event listener maybe you can tweak inside the function you are calling!!!!
    //    winner ,
    //    outcome
    
    //}

   

}

//Making function removeClick to disable choice buttons after game finishes
function removeClick(){

    const buttons = document.querySelectorAll("#choice");
    buttons.forEach((button) => {
        
        button.removeEventListener("click", playRound);
        button.disabled=true;
    });

}

//Creating a button that refreshes page after 

const tryAgain = document.querySelector('#tryAgain');

tryAgain.addEventListener("click", () => {
    window.location.reload(true);
});

//Disabling the tryAgain button and making it reactivate at the end
tryAgain.disabled=true;




//METHOD 1 
//
//Looping Adding event listener to button that calls playRound() function 
//
const buttons= document.querySelectorAll("#choice"); //Creates a nodelist with all buttons
buttons.forEach((button) => {                       //biggest issue is that forEach cannot be bound

    button.addEventListener("click", () => {
        playRound(button.innerHTML,computerPlay());
    });

});


//METHOD 2 
//Bubbling Adding event listener to button that calls playRound() function

//const option1 = document.querySelector("#choice1");
//const option2 = document.querySelector("#choice2");
//const option3 = document.querySelector("#choice3");

//document.body.addEventListener('click', event => {
//    if (event.target !== option1 && event.target !== option2 && event.target !== option3) {
//        return 
//    }
//    playRound(event.target.innerHTML,computerPlay());
//});




//if(playRound(thisArg.innerHTML,computerPlay()).winner == "Player"){
    
//}






//playRound(choice, computerPlay());

//TWO CHOICES, EITHER CALL PLAYROUND AND USE CHOICES ORRRR CODE BUTTON TO CALL PLAYROUND


//let playerSelection= btn.innerHTML;
//console.log("Player selection:" + playerSelection); //Checks to see what playerSelection and computerSelection are
//console.log("Computer selection:" + computerSelection);
//btn.addEventListener("click", playRound);
    //console.log(playRound(choice.innerHTML,computerPlay())); //Works only with first button, need to put them into container and forEach
//});




/* Plays 5 Rounds and then determines who won

let playerWins = 0;
let compWins = 0;
let tie =0;

for(let numGames=0 ; numGames<5 ; numGames++){
    
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
    let computerSelection = computerPlay();
    let runRound = playRound(playerSelection, computerSelection);
    let roundwin = runRound.winner;
    let message = runRound.outcome;
     if(roundwin == "Player"){
         playerWins ++;
     }
     if(roundwin == "Computer"){
         compWins ++;
     }
     if(roundwin =="None"){
          tie ++;
     }
    console.log(message); 
    
}

if(playerWins > compWins){
    console.log("Congrats You Win By: " + (playerWins - compWins)+ " Points");
}
else if(compWins > playerWins){
    console.log("Sorry You Lost By : " + (compWins - playerWins) + " Points");
}
else{
    console.log("Tie")
}


*/



