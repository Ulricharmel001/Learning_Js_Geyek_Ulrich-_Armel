
let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let  playerEl = document.getElementById("player-el")
let player = {
    name : " Ulrich ",
    chips : 150

}

playerEl.textContent = `${player.name} \n $${player.chips}`



// if 1     -> return 11
    // if 11-13 -> return 10

function getRandCard(){
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
  if (randomNumber===1){
    return 11
  }else if (randomNumber>10 && randomNumber<=13){
    return 10
  }else{
    return randomNumber
  }
    
}


function startGame() {
isAlive  = true
let firstCard = getRandCard()
let secondCard = getRandCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
