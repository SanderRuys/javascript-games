/*to start you need two arrays one for the card values Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King 
and an array for the Suits: Spades, Diamonds, Clubs, Hearts

After you made those arrays you need an empty array for the deck where you can push the cards to
All the values need to be assigned to each suit so you get 52cards in total in  one deck*/

const startGameButton = document.getElementById("play");
const hitButton = document.getElementById("pick-card");
const holdButton = document.getElementById("hold");
const yourCardValue = document.getElementById("your-card-value");
const dealerCardValue = document.getElementById("dealer-card-value");
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];
let turn = true;
let playersHand = [];
let dealersHand = [];
let playerCardTotal = 0;
let dealerCardTotal = 0;

//make your full card deck
const  createDeck = () => {
    for (let i = 0 ; i < values.length; i++)
    {
        for(let x = 0; x < suits.length; x++)
        {
            let weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            let card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    console.log(deck);
}

//shuffle the cards
const shuffle = () => {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++)
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

const dealFirstHand = () =>{
    for (let i = 0; i < 2; i++) {
        giveCardToPlayer();
        giveCardToDealer();
        
    }
}

const giveCardToPlayer = () =>{
    const firstCard = deck.pop();
    playersHand.push(firstCard);
    console.log("firstcard player value = " + firstCard.Value);
    console.log("firstcard player suit = " + firstCard.Suit);
    console.log("playershand = " + playersHand);

    // check card sum value
    playerCardTotal = playersHand.map(item => item.Weight).reduce((prev, curr) => prev + curr, 0);
    yourCardValue.innerText = ("total: " + playerCardTotal);
    //check if card  > 21
    if (playerCardTotal > 21){
        console.log("you lose");
        yourCardValue.innerText = ("Bust !!! Your total is: " + playerCardTotal);
    }
    

}
const giveCardToDealer = () =>{
    const firstCard = deck.pop();
    dealersHand.push(firstCard);
    //if cards < 15 take another card
    dealerCardTotal = dealersHand.map(item => item.Weight).reduce((prev, curr) => prev + curr, 0);
    dealerCardValue.innerText = ("total: " + dealerCardValue);
    //if cards > 15 stop

    //check if card  > 21
}

//stop turn after pressing hold button
const stopTurn = () =>{
    // your turn == true and dealers turn == false
    //if it was your turn, give turn to dealer
    if (turn == true){
        turn = false;
        console.log("turn: " + turn);
        giveCardToDealer();
    }
    //if it was dealers turn, then end game
    else{
        console.log("end game");
    }
}

//start the game
const startTheGame = () => {
    createDeck();
    shuffle();
    //deal first hand
    dealFirstHand();
    turn = true;
    //
    console.log(playersHand);
    
}


//button click eventListeners
startGameButton.addEventListener("click", startTheGame);
hitButton.addEventListener("click", giveCardToPlayer);
holdButton.addEventListener("click", stopTurn);