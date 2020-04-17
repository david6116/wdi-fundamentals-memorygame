

const cards = [
{
  rank: 'queen',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
  }
}

function flipCard(cardId){
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage)
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  if (cardsInPlay.length === 2) {
    checkForMatch()
  } else {
    console.log("Please select a second card.")
  }
}
flipCard(0);
flipCard(1);
