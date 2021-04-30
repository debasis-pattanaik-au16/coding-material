const fs = require('fs').promises


// fs.readFile('./sample.txt', 'utf-8').then(function(data){
//     console.log(data)
// })

// fs.writeFile('test.txt', "This is a test write").then(()=> console.log('Done'))

async function read(){
    const data = await fs.readFile('sample.txt')
    console.log(data)
}

read()

async function write(){
   try {
       
    const data = await fs.appendFile('test2.txt', "This is coming from async await")
    console.log(data)
    
   } catch (error) {
       
   }
}
write()