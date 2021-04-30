// var card_number = "468765243218"
// function pay() {
//     //logic to complete payment
//     console.log("Payment Completed with card number" + card_number )
// }

// pay()

//IIFE
var app = function(){
    var card_number = "468765243218"

    function pay(){
        startPayment()
        console.log("Payment Completed with card number " + card_number )
    }

    //private function
    function startPayment(){
        console.log("Payment Started with card number " + card_number )
    }

    
    return { pay: pay }
    // return {
    //     pay: pay,
    //     startPayment: startPayment
    // }

}()

//higher order function
function mnc() {
    console.log("Coming from MNC")
}

function xyz(abc) {

    console.log(abc)
    abc()
    return function(){
        console.log("Returned function")
    }
}

var test = xyz(mnc)
console.log(test);
test()