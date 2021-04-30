const fileSystem = require('fs')
const package = require('./package.json')
console.log(package.license)



// console.log("Reading")
// const textFromFile = fileSystem.readFileSync('./samplefile.txt', 'utf-8')
// console.log(textFromFile)
// fileSystem.readFile('./samplefile.txt', 'utf-8', function(err, data){
//     if (err) throw err

//     console.log(data)
// })

// console.log("Finished")


// const textToWrite = "This is going to be written in the file"

// console.log("Writing")
// // fileSystem.writeFileSync('./myFile.txt', textToWrite)
// fileSystem.writeFile('./myFile.txt', textToWrite, function(err){
//     if (err) throw err
//     console.log("Finished")
// })
// console.log("Written")

// try {
//     fileSystem.unlinkSync('./myFile.txt')
//     console.log('Deleted')
// } catch (error) {
//     console.log('Error in First Delete')
//     console.log(error)
// }


// fileSystem.unlink('./myFile2.txt', function(err){
//     if (err) throw err
//     console.log("deleted 2nd file")
// })

