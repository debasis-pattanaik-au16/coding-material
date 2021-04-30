const express = require('express');
const path = require('path')
const app = express()

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/txt', (req, res) => {

    res.sendFile(path.join(__dirname+'/test.txt'))
})

app.listen(3000, () => console.log('Server Started'))