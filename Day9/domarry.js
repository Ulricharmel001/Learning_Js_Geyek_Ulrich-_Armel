// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// // How do you keep the spaces between the words if I remve them from the array?

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + ", "
// }

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person ={
//     name: "ulrich",
//     age : 23,
//     county : "Cameroon"
// }

// function logData(){
//     console.log(`${person.name} is  ${person.age}, years old and lives in ${person.county}`)
// }

// logData()



// let randomNumber = Math.random() * 6

// console.log(randomNumber)
// let roundedNum = Math.ceil(randomNumber)
// console.log(roundedNum)




// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 13 ) + 1
//     return randomNumber
// }
//  let ran = console.log(rollDice())





let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution(){
    console.log(" showing solution ")
}

if (hasHintsLeft===false && hasSolvedChallenge ===false){
    showSolution()
}else{
    console.log("solve it or try hint")
}


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


let houseListing = {
    title : "Best house",
    isActive : true,
    length :30,
    description:  " best listing of the month "

}

console.log(houseListing.title, "\n", houseListing.isActive)