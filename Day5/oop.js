// function totalPrice(unitPrice, qty){ 
// return unitPrice*qty   
// }
//  var total_price = totalPrice(2, 5)
//  console.log("Total price is:",total_price+"$")


// another way


var purchase1 = {
    qty : 10,
    price : 30,
    totalPrice : function(){
        var cal = this.price*this.qty;
        console.log("the total price is:", cal+"$")
    }

}
purchase1.totalPrice();


var purchase1 = {
    qty : 10,
    price : 30,
    totalPrice : function(){
        var cal = purchase1.price*purchase1.qty;
        console.log("the total price is:", cal+"$")
    }

}
purchase1.totalPrice();