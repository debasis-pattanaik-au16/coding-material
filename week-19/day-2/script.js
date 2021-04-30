// const yash = {
//     name: "Yash",
//     age: 24,
//     height: 123

// }

// const joseph = {
//     name: "Joseph",
//     age: 34,
//     height: 123
// }

// function Person(passedName, passedAge){
//     this.name = passedName
//     this.age = passedAge
// }

// Person.prototype.hello = function(){
//     console.log("Hello")
// }

// // const xyz = new Person("Joseph", 34)
// // const pqr = new Person("ASD", 34)


// function Programmer(name, passedProgrammingLang) {
//     this.name = name
//     this.programmingLang = passedProgrammingLang
// }

// Programmer.prototype = Object.create(Person.prototype) //inheritance link
// Programmer.prototype.constructor = Programmer


// Programmer.prototype.writeCode = function () {
//     console.log(`${this.name} is coding`)
// }


// const prgm = new Programmer("ABC", "JavaScript")
// prgm.hello()
// prgm.writeCode()



/**ES6 Classes */

class Person {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log(`${this.name} says hello. My age is ${this.age}`)
    }
}

class Programmer extends Person{

    constructor(passedName, passedAge, passedProgLang){
        super(passedName, passedAge)
        this.programmingLang = passedProgLang
    }

    writeCode(){
        console.log(`${this.name} is coding in ${this.programmingLang} & the age is ${this.age}`)
    }
}


const personObj = new Person('Yash', 88)
// console.log(personObj)
// personObj.sayHello()

const programmerObj = new Programmer('Bob', 45, 'Java')
// console.log(programmerObj)
// programmerObj.writeCode()
// programmerObj.sayHello()



class Vehicle{


    static count = 0

    static myStaticMethod() {

    }
    constructor(year, mfg){

        this._year = year
        this._mfg = mfg

        Vehicle.count += 1
    }

    get year(){
        return this._year
    }

    set year(newYear){
        this._year = newYear
    }

    get manufacture(){
        return this._mfg
    }

    set manufacture(newMfg){
        this._mfg = newMfg
    }
}

const vehicleObj = new Vehicle(1997, 'Bajaj')
console.log(Vehicle.count)
const vehicleObj1 = new Vehicle(1875, 'ASD')
console.log(Vehicle.count)
const vehicleObj2 = new Vehicle(7987, 'ASDADAS')
console.log(Vehicle.count)

console.log(vehicleObj)
console.log(vehicleObj1)
console.log(vehicleObj2)
