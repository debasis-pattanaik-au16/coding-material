const userObject = require('./db/users.json')
const expHbs = require('express-handlebars')
const express = require('express');
const app = express();


app.engine('handlebars', expHbs())
app.set('view engine', 'handlebars')


app.use(express.static('public'))
// app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/home.html')

})

app.post('/profile', (req, res) => {
    console.log(req.body)
    const {email, password} = req.body
    const keys = Object.keys(userObject)
    let userFound = false;

    keys.forEach(prop => {
        const user  = userObject[prop]
        
        if (user.email === email && user.password === password) {
            //user exist
            userFound = true
            res.render('profile', user)
            return false;
        }
    })

    if (userFound === false) {
        res.send('User Not Found')
    }

    
})


app.listen(3000, () => console.log('Server Started'))