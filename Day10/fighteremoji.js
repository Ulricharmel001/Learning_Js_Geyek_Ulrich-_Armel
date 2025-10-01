let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

let firstFighter = getRandomFighter()
let secondFighter = getRandomFighter()

function getRandomFighter(){
    randIndex = Math.floor(Math.random()*fighters.length)
    return fighters[randIndex]
}
console.log( getRandomFighter() )

fightButton.addEventListener("click", function() {
    stageEl.textContent = firstFighter + " " + "VS" +  " "+ secondFighter

    // Challenge:
    
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
 