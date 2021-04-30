export let myVariable = 456

export function add(...args){
    let sum = 0
    for (const number of args) {
        sum+= number
    }
    return sum
}

export function cube(num){
    return num**3
}

export default { cube, add, myVariable }