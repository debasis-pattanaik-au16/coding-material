// var asd = 10

// function xyz(params) {
//     console.log(asd)
// }

// function abc(params) {
//     console.log(asd)
// }

// abc()
// xyz()
var name= 'asd'
function xyz() {
    var innerVariable = 10;
    var innerVariable2 = "MY String"
    function increase() {
        
        innerVariable++
        alert(innerVariable)
        alert(innerVariable2)
    }
    // alert(innerVariable2)
    return increase
}
var fn = xyz()
fn()
fn()
fn()

// function x(){
//     var text = "25"
//     return function (){
//         return function(){
//             text += "100"
//             console.log(text)
//         }
//     }
// }

// x()()()