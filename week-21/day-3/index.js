//Missing
// DOM Manipulation, window, document, geolocation, HTML & CSS related

// callbaks, closures, hoisting, anno... res, es6 classes promises

//generate random colors
// 2ways ==> 1. You write your own logic 
//       ==> 2. use 3rd party package

const randomClr = require('randomcolor')
const express = require('express')
const app = express()

//defining route
app.get('/randomColor', function(req, res){
    console.log('Received Request')

    const color = randomClr()
    console.log(color)
    res.send(color)
})


app.listen(3000, function(){
    console.log("Server Started")
})