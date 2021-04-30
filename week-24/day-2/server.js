const fileUpload = require('express-fileupload')
const expHbs = require('express-handlebars')
const express = require('express');
const app = express();

const user = [
    {
        email: 'johnDoe@jasper.info',
        password: '123abc'
    },
    {
        email: 'anagram@jasper.info',
        password: '123abc'
    }
]

app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {

    res.render('home')

})

app.get('/profile', (req,res) => {
    console.log(req.headers.cookie)

    if (req.headers.cookie.includes('userIdentified') === true) {
        
        res.render('profile')
        return
    }

    res.redirect('/')
    
})

app.post('/login', (req,res) => {
    const {email, password} = req.body

    for (let index = 0; index < user.length; index++) {
        const userObj = user[index];

        if (userObj.email === email && userObj.password === password) {
            
            const exprireDate = new Date('2021-04-30')
            res.cookie('userIdentified', userObj.email, { expires: exprireDate })

            res.redirect('/profile')
            return
        }
        
    }

    res.send("User not found")
})


app.listen(3000, () => console.log('Server Started'))