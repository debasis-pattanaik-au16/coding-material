const express = require('express');
const app = express();
const users = require('./db/users.json')
const fs = require('fs');

app.use(express.static('public'))
app.use(express.json())
// app.use(express.urlencoded({}))



app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/home.html')

})

app.post('/signUp', (req, res) => {
    console.log(req.body)

    users.push(req.body)

    res.json({ error: 0 })
    console.log(users)

    fs.writeFileSync(__dirname + '/db/users.json', JSON.stringify(users, null, 4))
})


app.get('/about', (req, res) => {

    res.sendFile(__dirname + '/public/about.html')
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})


// app.get('/contact', (req, res) => {
//     const html = `
//         <div>
//             <h1>Contact Me</h1>
//         </div>
//         <a href='/'>Home</a>
//         <a href='/about'>About</a>
//     `
//     res.send(html)
// })



app.listen(3000, () => console.log('Server Started'))