const router = require('express').Router()


//list of all actors
router.get('/', async (req, res) => {



    let sql = `SELECT * FROM actor `

    if (req.query.number) {
        sql += ` LIMIT ${req.query.number}`
    }

    const [rows, fields] = await connection.execute(sql)

    console.log(rows)

    res.json(rows)


    // connection.query(sql, (err, result, fields) => {

    //     if (err) {
    //         res.send("Error")
    //         return
    //     }

    //     res.json(result)

    // })

})

// get a specific actor by its actor id
router.get('/:actorId', async (req, res) => {

    let sql = `SELECT * FROM actor WHERE actor_id=${req.params.actorId}`
    console.log("router.get ~ sql", sql)

    const [rows] = await connection.execute(sql)

    res.json(rows)

})

// add new row to actor table
router.post('/', async (req, res) => {

    let sql = `INSERT INTO actor (first_name, last_name) VALUES('${req.body.firstName}', '${req.body.lastName}')`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)

})

// update an actor based on its actor id
router.put('/:actorId', async (req, res) => {

    let sql = `UPDATE actor SET first_name='${req.body.firstName}', last_name='${req.body.lastName}' WHERE actor_id=${req.params.actorId}`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)

})

//delete an actor based on its actor id
router.delete('/:actorId', async (req, res) => {

    let sql = `DELETE FROM actor WHERE actor_id=${req.params.actorId}`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)
})


module.exports = router