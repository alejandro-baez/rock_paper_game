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

computerPlay();


/* WORKS!!!!
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

function playRound(playerSelection, computerSelection){
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

    return {
        winner ,
        outcome
    
    }

}


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

if(playerWins > compWins && playerWins > tie){
    console.log("Congrats You Win by: " + playerWins+ " points");
}
else if(compWins > playerWins && compWins > playerWins){
    console.log("Sorry You Lost by : " + compWins + " points");
}
else{
    console.log("Tie")
}



