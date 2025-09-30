let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let card = [firstCard, secondCard]


let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let  cardEl = document.querySelector("#card-el")


function startGame(){
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        sumEl.textContent = `Sum: ${firstCard + secondCard}`
        messageEl.textContent = "Do you want to draw a new card? "
        cardEl.textContent = `Card: ${card[0]} ${card[1]}`
    } else if (sum === 21) {
        sumEl.textContent = `Sum: ${card[0] + card[1]}`
        messageEl.textContent = "Wohoo! You've got Blackjack! "
        cardEl.textContent = `Card: ${firstCard} ${secondCard}`
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game! "
        sumEl.textContent = `Sum: ${card[0] + card[1]}`
        cardEl.textContent = `Card: ${card[0]} ${card[1]}`
        isAlive = false
    }
   
}


function  newCard(){
    let card = 1
    sum += card
    renderGame()
    sumEl.textContent = `Sum : ${sum}`
}




