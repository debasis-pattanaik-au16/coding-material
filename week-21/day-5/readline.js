const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

// rl.question("What is your name?", function(name){  
//     console.log(`Hi Nice to meet you ${name}`)
    
//     rl.question('What is your age', function(age){
//         console.log(`You are ${age} old.`)
//         rl.close()
//     })
// })

const rs = require('readline-sync');

const name = rs.question('What is your name?')
const age = rs.questionInt('What is your age?')

console.log(`Hi, ${name}. I see you are very old. ${age} years old!!!`)