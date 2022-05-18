alert("guess the random number between 1 and 17");

const generateNr = () => {
    const randomNr = Math.floor(Math.random()*17)+1;
    console.log("random = " + randomNr);
    return randomNr;
}

let generated = generateNr();

function getNumber (){
    let inputNr = parseInt(document.getElementById("inputNumber").value);
    console.log("input = " + inputNr);
    if (inputNr <= 0 || inputNr > 17){
        alert("Enter number between 1 and 17!!");
        document.querySelector("inputNumber").value = "";
        return false;
    }
    else{
        return inputNr;
    }
}

const compareNr = () => {
    const theNumber = getNumber();
    if (generated == theNumber){
        return alert("Awesome! You number " + theNumber + " was correct. You can be named many things, hungry not being one of them.");
    }
    else if (generated == theNumber + 1 || generated == theNumber - 1) {
        return alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
    }
    else {
        return alert("Bummer... You guessed " + theNumber + " and the secret number was " + generated + ".");
    }
}

function buttonClick(){
    compareNr();
    generated = generateNr();
}