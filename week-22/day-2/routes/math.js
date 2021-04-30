const { square, cube } = require('../math-utilities');
const express = require('express')
const router = express.Router()

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