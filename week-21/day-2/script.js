//Functional Programming

/**
 * Principles
 * 
 * 1. Pure Functions
 * 2. Function Composition
 * 3. Avoiding Shared state
 * 4. Avoid Mutating state // Immutability
 * 5. Avoid Side Effects
 * 
 * =======
 * 6. Referential Transparency
 * 7. Higher Order functions
 * 8. Functions in JS are First Class citizen
 */


// 1. Pure functions

const name = 'Alice'

//Impure function
const sayHi = () => {
    console.log(`Hi, I am ${name}`)
}

// sayHi()

// Pure function
const sayHello = (nameStr) => {
    console.log(`Hi, I am ${nameStr}`)
}

// sayHello(name)


// 2. Function Composition

const str = "How to become a developer"

const toSlug = (string = "") => {

    const result = string.split(' ').map(item => item.toLowerCase()).join('-')
    console.log(result)
}

// toSlug(str)

const curry = (callback) => {
    return (...args) => {
        callback.bind(null, ...args)
    }
}

// const newMap = curry( (fn, arr) => arr.map(fn) )
// // console.log(newMap)

// const join = curry( (fn, arr) => arr.join(fn) )
// // console.log(join)

// const newToLowerCase = curry((string) => string.toLowerCase())
// // console.log(newToLowerCase)

// const newSplit = curry((separator, str) => str.split(separator))
// // console.log(newSplit)

// const toNewSlug = (input) => join(
//     () => newMap(newToLowerCase, newSplit(' ', input))
// )

// console.log(toNewSlug(str))

function subtractMaker(num) {
    return (passedNum) => {
        console.log(num - passedNum)
    }
}

// const yashGreeter = subtractMaker('Yash')

// const akashGreeter = subtractMaker('Akash')

// yashGreeter()
// akashGreeter()

const alwaysSubtractTen = subtractMaker(10)

alwaysSubtractTen(5)


// 3. Avoiding Shared state

const PI = 3.14
const radius = 12

//Impure
const areaCircle = (parameterRadius) => {
    console.log(PI * parameterRadius * parameterRadius)
}

const volSphere = (passedRadius) => {
    console.log(PI * (passedRadius**3) * (4/3))
}

// area(radius)

// pure
const calArea = (pramRadius, pi) => {
    console.log(pi * pramRadius * pramRadius)
}

const calVol = (pramRadius, pi) => {
    console.log(pi * (pramRadius**3) * (4/3))
}

// calArea(radius, 3.124587521423)


// 4. Avoid Mutating State

const person = { name: "Alice", age: 12}

// console.log(person)

// impure function
const mutateObj = (personObj) => {
    personObj.name = "Yash"
    personObj.age = 10
}

// mutateObj(person)

// pure function
const pureMutate = (personObj) => {
    const newPerson = {...personObj}
    newPerson.name = "Yash"
    newPerson.age = 10
    return newPerson
}

const nonMutatedObj = pureMutate(person)
// console.log(person)
// console.log(nonMutatedObj)



// 5. Avoid Side Effects

let areaVolume = [0,0] //12, 23


const area = (length, breadth) => {

    const ar = length * breadth;

    // areaVolume[1] = ar //impure

    return ar
}

const volume = (length, breadth, height) => {
    const vol = length * breadth * height;
    // areaVolume[0] = vol //impure

    return vol
}


function displayAreaAndVolume(arVol) {
    console.log(`Area is ${arVol[0]} & Volume is ${arVol[1]}`)
}
areaVolume[0] = area(10, 10)
areaVolume[1] = volume(10, 10, 10)
displayAreaAndVolume(areaVolume)