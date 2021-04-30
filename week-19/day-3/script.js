function general(operationType, ...args) {
    console.log(args)
    if (operationType === 'add') {
      
    }
    let sum = 0
    // args.forEach(item => sum += item)
    for (let index = 0; index < args.length; index++) {
        sum += args[index]
    }
    console.log(sum)
}

general("add",{}, 88, 77, 99) // not sure how many arguments

const obj = {
  keyA: "Value1",
  keyB: "Value2"
}

const obj2 = {
  keyC: "Value3",
  keyD: "Value4",
  nested: {
    abc: 'ASD'
  }
}

const joinedObj = {
  keyE: 'Value5',
  ...obj,
  ...obj2
}


const arr1 = [10, 20, 30]
const arr2 = [90, 120, 200]

const arr3 = [-1,-2, ...arr1, ...arr2]
const str = "This is a class"
const arr4 = [...str]
console.log(arr4)