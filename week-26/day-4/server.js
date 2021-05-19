const mysql = require('mysql2/promise');
const express = require('express');
const app = express();


app.use(express.json());

// const mysql = require('mysql');
// mysql package
// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'sakila'
// })

// connection.connect()

let connection = null


async function initDatabaseConnection(){

    connection = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'sakila'
    })
    await connection.connect()

    console.log("Database Connected")
    // console.log(connection)

}



//list of all actors
app.get('/actor', async (req, res) => {



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
app.get('/actor/:actorId', async (req, res) => {

    let sql = `SELECT * FROM actor WHERE actor_id=${req.params.actorId}`
    console.log("app.get ~ sql", sql)

    const [rows] = await connection.execute(sql)

    res.json(rows)

})

// add new row to actor table
app.post('/actor', async (req, res) => {

    let sql = `INSERT INTO actor (first_name, last_name) VALUES('${req.body.firstName}', '${req.body.lastName}')`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)

})

// update an actor based on its actor id
app.put('/actor/:actorId', async (req, res) => {

    let sql = `UPDATE actor SET first_name='${req.body.firstName}', last_name='${req.body.lastName}' WHERE actor_id=${req.params.actorId}`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)

})

//delete an actor based on its actor id
app.delete('/actor/:actorId', async (req, res) => {

    let sql = `DELETE FROM actor WHERE actor_id=${req.params.actorId}`

    console.log(sql)
    const [rows] = await connection.execute(sql)

    res.json(rows)
})

app.listen(3000, async () => {
    console.log("Server Started")
    await initDatabaseConnection()

})