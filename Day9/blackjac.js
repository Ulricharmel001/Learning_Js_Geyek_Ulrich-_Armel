let firstCard = 10
let secondCard = 9
let hasBlackJack = false
let isAlive = true

let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")


function startGame() {
    renderGame()
}

function renderGame() {
    
    cardEl.textContent = "Cards: "
    sum = 0
    
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
        sum += cards[i] 
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card? "
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game! "
        isAlive = false
    }
}

function newCard() {
    let card = 5  
    cards.push(card)
    renderGame()
    console.log(cards)
}
