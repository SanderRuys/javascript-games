/*to start you need two arrays one for the card values Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King 
and an array for the Suits: Spades, Diamonds, Clubs, Hearts

After you made those arrays you need an empty array for the deck where you can push the cards to
All the values need to be assigned to each suit so you get 52cards in total in  one deck*/

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = new Array();

//make your full card deck
function createDeck(){
    deck = new Array();
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
}
createDeck();
console.log("nr of cards = " + deck.length);

//shuffle the cards
function shuffle(){
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

//start the game
function startTheGame() {
    
}