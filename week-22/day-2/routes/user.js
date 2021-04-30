const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (request, response) => {

    const responseObj = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(responseObj.data)

    const thinUsers = responseObj.data.map((user) => {
        delete user.address
        delete user.company
        return user
    })

    response.json(thinUsers)
})


module.exports = router