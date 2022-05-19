
let resultMessage = document.querySelector("#result-message");
let yourPick;
let computersPick;

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

}

//excecute this function when battle button is pushed
function letsBattle() {
    console.log("let's battle");
    computerChoice();
}

