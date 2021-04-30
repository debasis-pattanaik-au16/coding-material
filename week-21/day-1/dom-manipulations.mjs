let myVariable = 123

// import { cube, add } from './math-operations.mjs'
import { add, cube } from './math-operations.mjs'
// console.log(test)
const result = cube(add(10,52,11))

const elem = document.createElement('h1')
elem.innerText = result

document.body.appendChild(elem)
console.log(myVariable)


localStorage // store data permanently as per user's wish
sessionStorage //store data only for the current session

// localStorage.setItem('computedValue', result)
// localStorage.setItem('username', 'yash')

// localStorage.removeItem('username')
localStorage
// sessionStorage.setItem('title', 'snha')

alert(sessionStorage.getItem('title'))

// localStorage.clear()

