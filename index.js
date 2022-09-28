// THE BLACKJACK GAME

//* Array - Ordered list of items - 0 indexed - Composite/Complex data type
let cards = []

let sum = 0
let message = ""

let hasBlackJack = false
let isAlive = false

let startEl = document.getElementById("start-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

let playerEl = document.getElementById("player-el")
let newCardEl = document.getElementById("newCard-el")
let reloadEl = document.getElementById("reload-el")

//* Object - Store data in depth - Composite / Complex data type - Key-Value pairs
// let player = {
//     name: "Guest",
//     chips: 200
// }
playerEl.textContent = player.name + " : $" + player.chips

//! Getting random card:
function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1

    //^ If randomNumber is the Jack, Queen or King:
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }

}

//! Starting the game function by render game function:
function startGame() {
    alert('How To Play : To win ( get Black Jack ), the sum of your cards should be equal to 21. If the sum is less than 21, you will remain in the game and will be able to draw a new card. if the sum is more than 21, you will lose the game ( To play again, reload the page ). Enjoy...')

    startEl.style.display = "none";

    // let newChips = 20
    // player.chips = player.chips - newChips
    // playerEl.textContent = player.name + " : $" + player.chips

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

//! Render game function:
function renderGame() {

    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + ", "
    }

    sumEl.textContent = "Sum : " + sum

    //^ Less than 21, you are in the game :
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }

    //^ Equal to 21, you have won :
    else if (sum === 21) {
        message = "You've got Blackjack!🎉"
        hasBlackJack = true
        newChips = 100
        player.chips = player.chips + newChips
    }

    //^ More than 21, you lost the game :
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

//! New card function:
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum = sum + thirdCard
        cards.push(thirdCard)
        renderGame()
    }

}


//? Important Information Regarding The Game:
// Ace = A = 1 or 11 (We will focus it as 11)
// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 4
// 5 = 5
// 6 = 6
// 7 = 7
// 8 = 8
// 9 = 9
// 10 = 10
// Jack = J = 10
// Queen = Q = 10
// King = K = 10