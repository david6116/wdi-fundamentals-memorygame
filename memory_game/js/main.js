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

function createBoard(){
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    let gameBoard = document.getElementById('game-board')

    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
  }
}

function resetBoard(){
  document.getElementById('statusWindow').innerHTML = "";
  document.getElementById('statusWindow').style.backgroundColor = "white";
  cardsInPlay.pop();
  cardsInPlay.pop();

  let cardElements = document.getElementById('game-board').childNodes;
  for (let i = 0; i < cardElements.length; i++) {
    let cardElement = cardElements[i]
    cardElement.setAttribute('src', 'images/back.png');
  }
}

const cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  document.getElementById('statusWindow').innerHTML = "You found a match!";
  document.getElementById('statusWindow').style.backgroundColor = "green";
  setTimeout( () => {resetBoard();}, 5000);
  } else {
  document.getElementById('statusWindow').innerHTML = "Sorry, try again!";
  document.getElementById('statusWindow').style.backgroundColor = "red";
  setTimeout( () => {resetBoard();}, 5000);
  }
}

function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch()
  } else {
    document.getElementById('statusWindow').innerHTML = "Please select a second card.";
    document.getElementById('statusWindow').style.backgroundColor = "Yellow";
  }
}

function  changeStatus(){
  status = document.getElementById('statusWindow');

}

createBoard();
