// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// function increment() {
//     console.log("The button was clicked")
// }


// //function to count

// function countDown(){
//     console.log(1)
//       console.log(2)
//         console.log(3)
//           console.log(4)
//             console.log(5)
// }
// countDown()

// // Create a function (you decide the name) that logs out the number 42 to the console
// // Call/invoke the function

// function number(){
//       console.log(42)
// }
// number()



// // Create a function that logs out the sum of all the lap times

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function sumLap(){
//      let totalLap = lap1 + lap2 + lap3
//     console.log("sum of lap :", totallap)

// }
// sumLap()


// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLapsCompleted(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)

// }


// incrementLapsCompleted()
// incrementLapsCompleted()

// incrementLapsCompleted()


let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEL)
let count = 0
function increment(){
    count += 1
    console.log(count,"button was clicked")
    countEL.innerHTML = count
}



function save (){
    let countStr = count  + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0

     //Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    
}

save()

