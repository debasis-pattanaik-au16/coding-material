/**
 * Let and Const
 */
// var name = "Yash"
// console.log(name);

// const name = "Yash"
// const PI = 3.14
// name = 'Goku'
// console.log(name);

// const arr = ['Yash', 'Goku']
// console.log(arr)
// // let arr = 123
// arr[0] = 'ES6'

// console.log(arr)


// function x(){

//     const abc = 123
//     console.log(abc)
//     {
//         {
//             const abc = 80
//             console.log(abc)
//         }
//         let abc = "Yash"
//         console.log(abc)
//     }
// }
// x()

/**
 * Template Literals
 */

// let firstName = 100
// let lastName = 200

// // const fullName = firstName + " " + lastName
// const fullName = `The of the person is ${lastName - firstName - 10}`

// console.log(fullName)


/**
 * New String methods
 */

const str = "This is a very long sentence."

// console.log(str.startsWith('very'))
// console.log(str.endsWith('ce.'))
// console.log(str.includes('very'))
// console.log(str.repeat(10))

/**
 * Arrow Functions
 */

// const add = (num1, num2) => num1 + num2
const square = num1 => num1**2


// console.log(add(10, 5))
// console.log(square(10))

// const arr = [5, 10, 15]

// const squaredArr = arr.map(item => item**2)

// console.log(squaredArr)

/**
 * Destructuring
 */


// const person = {
//     firstName: 'Yash',
//     lastName: 'Sinha',
//     age: 80,
//     height: 200,
//     profession: 'Unknown'
// }


// function greeter(personObj){


//     // const fName = personObj.age
//     // const lName = personObj.lastName

//     const {firstName, lastName} = personObj

//     console.log(`Hello, I am ${firstName.toUpperCase()} ${lastName.toUpperCase()}`)

//     const arr = [10, 20, 30, 50]

//     let [firstItem, secondItem] = arr

//     console.log(firstItem)
//     console.log(secondItem)


// }

// greeter(person)


// const arr = [5, 10, 15]

// const squaredArr = arr.map((abc, def, asd) => {

//     return abc + 10
// })

// console.log(squaredArr)

console.log(name)
var name = 'yash'