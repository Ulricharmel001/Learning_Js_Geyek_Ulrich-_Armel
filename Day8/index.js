
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

