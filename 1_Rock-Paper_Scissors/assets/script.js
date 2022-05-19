
let resultMessage = document.querySelector("#result-message");
let yourPick = 0;
let computersPick = 0;

//determine your choice
const rock = () => {
    resultMessage.innerHTML = "you chose ROCK";
    yourPick = 1;
}
const paper = () => {
    resultMessage.innerHTML = "you chose PAPER";
    yourPick = 2;
}
const scissor = () => {
    resultMessage.innerHTML = "you chose SCISSORS";
    yourPick = 3;
}


//determine computer's choice
const computerChoice = () => {
    //generate random nr between 1 and 3
    const randomNr = Math.floor(Math.random() * 3) + 1;
    switch (randomNr){
        case 1:
            console.log("Computer chose rock");
            computersPick = 1;
            break;
        case 2:
            console.log("computer chose paper");
            computersPick = 2;
            break;
        case 3:
            console.log("computer chose scissors");
            computersPick = 3;
            break;
        default:
            console.log("computer is asleep, please be quiet")
    }
}

const comparePicks = () => {
    // rock == 1, paper == 2, scissor == 3

    //draw
    if (yourPick === 1 && computersPick === 1){
        resultMessage.innerHTML = "it's a draw!";
    }
    else if (yourPick === 2 && computersPick === 2){
        resultMessage.innerHTML = "it's a draw!";
    }
    else if (yourPick === 3 && computersPick === 3){
        resultMessage.innerHTML = "it's a draw!";
    }
    //player wins
    else if (yourPick === 1 && computersPick === 3){
        resultMessage.innerHTML = "You lucky bastard, you won!!";
    }
    else if (yourPick === 2 && computersPick === 1){
        resultMessage.innerHTML = "You lucky bastard, you won!!";
    }
    else if (yourPick === 3 && computersPick === 2){
        resultMessage.innerHTML = "You lucky bastard, you won!!";
    }
    //computer wins
    else if (yourPick === 1 && computersPick === 2){
        resultMessage.innerHTML = "You lose!!";
    }
    else if (yourPick === 2 && computersPick === 3){
        resultMessage.innerHTML = "You lose!!";
    }
    else if (yourPick === 3 && computersPick === 1){
        resultMessage.innerHTML = "You lose!!";
    }
    else{
        resultMessage.innerHTML = "Hey no cheating !, choose your weapon!";
    }
}

//excecute this function when battle button is pushed
function letsBattle() {
    console.log("let's battle");
    computerChoice();
    comparePicks();
}

