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

