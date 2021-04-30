//Array Methods
var arr = [123, 332, 20, 50, 100, "Yash"];

// for (var index = 0; index <= arr.length; index++) {
//     // console.log(arr[index]) // 0 1 2 3 4..
// }

//forEach
function abc(element, index, myArr){
    // console.log("Executing")
    // console.log(element)
    // console.log(index)
    // console.log(myArr)
}

// function forEach(callback){

//     for (var index = 0; index < arr.length; index++) {
//         callback(arr[index], index, arr)
//     }
// }

arr.forEach(abc)


// 2nd Example
var numbers = [55, 12, 30, 2, 300, 555, 65, 88]


// var result = numbers.forEach(function (item, index,  originalArray) {

//     if (item % 2 === 0) {
//         console.log(item + " is an even number")
//     }else{
//         console.log(item + " is an odd number")
//     }

// })

var mapResult = numbers.map(function (item, index,  originalArray) {

    var square = item - 10
    return square
})
// console.log(mapResult)
// console.log(numbers)


//OBJECTS
// var person = {
//     name: 'Yash',
//     age: 50,
//     sayHello: function(){
//         console.log('Hello')
//     }
// }


function Person(passedName, passedAge){

    return {
        name: passedName,
        age: passedAge,
        sayHello: function(){
            console.log('Hello')
        }
    }

}

var abc = new Person("Yash", 50)

console.log(abc)