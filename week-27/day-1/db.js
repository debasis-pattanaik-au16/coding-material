const mysql = require('mysql2/promise');

async function initDatabaseConnection(){

    let connection = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'sakila'
    })
    await connection.connect()

    console.log("Database Connected")
    // console.log(connection)
    return connection

}

module.exports = { initDatabaseConnection }