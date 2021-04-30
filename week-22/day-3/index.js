const { response } = require('express');
const express = require('express');
const app = express();
const mathRouter = require('./routes/math');
const userRouter = require('./routes/user');

function logger(request, response, next){
    console.log('Request Came from the client')
    console.log(`Path: ${request.path} Method: ${request.method} Time: ${new Date().toLocaleString()}`)
    next()
}


//middleware
app.use(logger)


app.use('/math', mathRouter)
app.use('/user', userRouter)

app.listen(3000, () => console.log('Server Started'))