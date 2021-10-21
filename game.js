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

    /* return comp; */
    console.log(comp); //Figure out diff between return and console.log
}

computerPlay();