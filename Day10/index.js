// Scrimba challenges



let age = 19

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age <=6){
    console.log("Free pass")
}else if (age>5 && age <18){
    console.log("Child discount")

}else if(age >26 && age <67){
    console.log("Full price")
}else if (age >17 && age <27) {
    console.log("student discount")
}else{
    console.log("full price ")
}


// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// for (i=0; i<largeCountries.length; i++){
//     console.log("->",largeCountries[i])
// }



let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop()
console.log(largeCountries)
largeCountries.push("Pakistan")
console.log(largeCountries)
largeCountries.unshift("China")
console.log(largeCountries)


let dayOfMonth = 14
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&


if(dayOfMonth === 13 && weekday ==="Friday" ){
    console.log("😱")
}else{
    console.log("not friday 13")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )