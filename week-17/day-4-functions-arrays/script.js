//Functions

//function declaration
function myFunction(param1, param2 = 30){
    // your code
    console.log(param1 * param2)
}

// myFunction(10)

// function expression
// var add = function (num1, num2){
//     return num1 + num2
// }

// console.log(add(20, 30))


// Scopes
var name = 'Yash'

function displayName() {
    var name = 'Test'
    console.log(window.name)
}

// displayName()


//Array Or Lists
var list = [1,2,3]
var mixedList = [1,2,3, "Name", "Text"]

// console.log(list.length)
// // console.log(list.reverse())

// list.push(10)
// console.log(list)
// list.pop()
// console.log(list)
// list.unshift(20)
// console.log(list)
// list.shift()
// console.log(list)


//Callback functions
// var add = 123

//named function
function subtract(num1, num2) {
    console.log('Calculating Difference')
    return num1 - num2
}

function add(num1, num2) {
    console.log('Calculating Sum')
    return num1 + num2
}


function specialFunction(passedValue, diffValue, callback) {
    
    console.log('This is coming from function named specialFunction')

    console.log('passedValue is ', passedValue) //-10

    var result = callback(passedValue, diffValue) // 10 50
    console.log(result);
}

//anonymous function as well as callback function
var dummy = specialFunction(10, 50, add)

// var sum = add(10, 20)
// console.log(sum);


var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
// a = [3, [4,5], 1]
a.shift();
// a = [[4,5], 1]
a.shift();
// a = [1]
// a = []
console.log(a.shift()); //last line

// a = [22, 1]
// a = [1]
// a = [3, [4,5], 1]
// a = [1]
// a = []