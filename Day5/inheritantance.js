var bird ={
    hasWings : true,
    canFly : true,
    hasFeather: true
}

var bird1 = Object.create(bird)
console.log("bird1:" , bird1)
console.log("bird1 can fly:", bird1.canFly)
console.log("bird1 has feather :", bird1.hasFeather)
console.log("bird1 has wings :", bird1.hasWings)

var pingue1 = Object.create(bird)
console.log("pingue1 result, after modification of inheritance of bird")
console.log(pingue1.canFly = false)
console.log(pingue1.hasFeather = 30)
console.log(pingue1.hasWings ="it does not has wings")
