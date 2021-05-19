const { initDatabaseConnection } = require('../db')

const router = require('express').Router()


router.get('/', async (req, res) => {

    const connection = await initDatabaseConnection()

    let sql = `SELECT * FROM country`
    const [rows] = await connection.execute(sql)

    console.log(rows)

    res.render('city', { countries: rows })
})


router.post('/', async (req, res) => {

    console.log(req.body)

    const connection = await initDatabaseConnection()

    let sql = `INSERT INTO city (city, country_id) VALUES('${req.body.cityName}', '${req.body.countryId}')`
    const [rows] = await connection.execute(sql)

    console.log(rows)

    res.send('Added city')

})

module.exports = router