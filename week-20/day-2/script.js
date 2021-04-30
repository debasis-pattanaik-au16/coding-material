// Iterables  Array, Strings, Sets, Maps
// {} Objects Are not iterables



const arr = [20, 23, 10]
// const str = "HelloWorld"

const obj = {
    name:"Unnamed",
    age: -85,
    path: "Some value",
    [Symbol.iterator]: function(){
        let propertyCount = 0
        return {
            next: function(){
                propertyCount++;
                switch (propertyCount) {
                    case 1:
                        return {value: obj.age, done: false}
                    case 2:
                        return {value: obj.name, done: false}

                    case 3:
                        return {value: obj.path, done: false}
                    default:
                        return {value: undefined, done: true}
                }
            }
        }
    }
}
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }

// for (const value of obj) {
//     console.log(value)
// }

// for (const key in obj) {
//     console.log(key)
//     console.log(obj[key]);
// }

String.prototype[Symbol.iterator] = function(){

    let count = 4

    return {
        next: function(){

            if (count > 0) {
                count--;
                return {value: "Yash", done: false}    
            }else{
                return {value: undefined, done: true}    
            }
            
        }
    }
}



const str = "This"

// for (const iterator of str) {
//     console.log(iterator)
// }



const iterator = str[Symbol.iterator]()
// console.log(iterator)
// console.log(iterator.next().value)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// console.log(iterator.next())

class Vehicle{
    constructor(year){
        this.year = year

        //
        //
        //
    }

    // [Symbol.iterator](){

    // }

}


const v1 = new Vehicle()

// for (const iterator of v1) {
    
// }




//generators
function* numbersGen(){
    let i = 0
    while (true) {
        yield i++
    }
}

const numGen = numbersGen()

function* range(end=10, start=0, step=1){

    for (let i = start; i < end; i += step) {
        
        yield i
        
    }

}

// const rangeArr = [...range(50, 10, 5)]
const iter = range(5, 2)



