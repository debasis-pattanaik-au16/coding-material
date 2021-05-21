const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
const secretKey = "asdasdlkznxclkanskdjqwhefkjansvlkzjxhcvlaielknxvxkzljcvnlkasjdfh"
const refreshSecretKey = "laksdjlzncvljasdnasd"

app.use(express.json());

let rTokens = []

app.post('/newToken', (req, res) => {

    try {
        
        const rfToken = req.body.refreshToken

        if (rTokens.includes(rfToken) === false) {
            return res.json({invalid: true})
        }
        const payload = jwt.verify(rfToken, refreshSecretKey)

        const accessToken = generateJwt(payload)

        res.json({accessToken: accessToken})

    } catch (error) {
        return res.json({ error: true })
    }


})

app.post('/logout', (req, res) => {
    const tokenToDelete = req.body.refreshToken

    rTokens = rTokens.filter(token => token !== tokenToDelete)

    res.json({deleted: true})

})

//
app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    //1. Search in DB for the username
    // if userNot preset return

    //2. Verify password
    // if notCorrect password, return

    const user = {
        userName: 'yash@123', // this will come from DB,
        isAuth: true,
        role: "admin"
    }


    //generate jwt token
    const accessToken = generateJwt(user)
    const refreshToken = jwt.sign(user, refreshSecretKey)

    rTokens.push(refreshToken)


    res.json({
        accessToken: accessToken,
        refreshToken: refreshToken
    })

})


app.get('/protectedRoute', authenticateToken, (req, res) => {

    res.json({ myData: 123123, username: req.user.userName })

})



function generateJwt(payload) {

    return jwt.sign(payload, secretKey, { expiresIn: '1h' })
}

function authenticateToken(req, res, next) {

    try {

        const authToken = req.headers.authentication
        console.log(authToken)

        if (!authToken) return res.json({ error: true })


        const verified = jwt.verify(authToken, secretKey)
        console.log("🚀 ~ file: server.js ~ line 62 ~ authenticateToken ~ verified", verified)

        req.user = verified

        next()

    } catch (error) {
        return res.json({ error: true })
    }

}



app.listen(3000, async () => {
    console.log("Server Started")
})