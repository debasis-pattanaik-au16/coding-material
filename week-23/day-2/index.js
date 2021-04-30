const userObject = require('./db/users.json')
const expHbs = require('express-handlebars')
const express = require('express');
const app = express();


app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
// app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {

    res.render('home')

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


app.get('/features', (req, res) => {

    const featureObj = {
        name: "lorem ipsum",
        title: 'If works',

        age: 123,

        interests: ['food', 'reading', 'software', 'satta', 'games'],
        address: {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        }
    }

    res.render('features', featureObj)
})


app.listen(3000, () => console.log('Server Started'))