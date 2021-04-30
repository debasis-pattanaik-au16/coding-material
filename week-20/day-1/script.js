//promise is an object
//  3 states
    // ==> Pending
    // ==> Fullfilled
    // ==> Rejected

function executerFunction(resolve, reject){
    
    setTimeout(function(){ 
        // fetching some number
        const number = 12
        
        if (number % 2 === 0) {
            const numberCube = cube(number)
            resolve(numberCube)
        }else{
            reject()
        }
        
        
    }, 5000 )
}

const myPromise = new Promise(executerFunction)
myPromise.then(xyz)
myPromise.catch(abc)


function xyz(numCube){
    console.log('Coming because promise is fulfilled')
    console.log(numCube)
}
function abc(){
    console.log('Coming because promise is rejected')
}

console.log('This is logged immediately')





















function cube(num1){
    return num1 * num1 * num1
}




