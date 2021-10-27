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

function playRound(playerSelection, computerSelection){
    let outcome;

    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")){
        outcome = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection == computerSelection){
        outcome = "You Tie! " + computerSelection + " is the same as " + playerSelection;
    } else {
        outcome = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    return outcome;
    //console.log(outcome); Better not to use this atm


}

const playerSelection = "Paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


