try {
    console.log(a+b)

}catch(err){
    console.log(err)
    console.log('There was a reference error')
    console.log('my error saved in console')
}
console.log(' my  program did not stop')

function add(a, b){
    return a+b
}
add = add(1, 2)
console.log(add)
