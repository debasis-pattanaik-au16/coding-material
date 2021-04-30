const users = require('./db/users.json')
const express = require('express');
const app = express();
app.use(express.json());
//users
app.get('/users', (req, res) => {

    const keys = Object.keys(users) //[1,2,3,4]

    const userArray = keys.map(id => users[id])

    res.json(userArray)
})


//users based on ID
app.get('/users/:userId', (req, res) => {


    console.log(req.params)
    const { userId } = req.params

    const foundUser = users[userId]

    res.json(foundUser)
})

//create
app.post('/users', (req, res) => {
    let keys = Object.keys(users) //['1','2','3','4']

    keys = keys.map(item => Number(item))

    const newId = Math.max(...keys) + 1

    users[newId] = req.body

    res.json({success: true, user: req.body})
})



//update
app.put('/users/:userId', (req, res) => {


    const { userId } = req.params

    users[userId] = req.body

    res.json({success: true, user: req.body})
})


app.delete('/users/:userId', (req, res) => {

    const deletedObj = users[req.params.userId]
    delete users[req.params.userId]

    res.json({success: true, user: deletedObj})
})

app.listen(3000, () => console.log('Server Started'))