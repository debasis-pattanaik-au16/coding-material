const { square, cube } = require('../math-utilities');
const express = require('express')
const router = express.Router()

function preProcess(req, res, n){
    console.log('Pre processing the request')

    const param = req.path.split('/')
    console.log(param)
    const num = param[2]

    const isNumber = Number(num) //NaN
    
    if(isNaN(isNumber) === true){
        res.send('Wrong Parameters')
    }else{
        n()
    }
}

router.use(preProcess)

router.get('/square/:num', (req, res) => {
    let {num} = req.params
    num = Number(num)
    const sq = square(num)
    res.send(`${sq}`)
})

router.get('/cube/:num', (req, res) => {
    let {num} = req.params
    num = Number(num)
    const cu = cube(num)
    res.send(`${cu}`)
})


module.exports = router