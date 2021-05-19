const {initDatabaseConnection} = require('./db')
const express = require('express');
const app = express();
const expHbs = require('express-handlebars');
const actorRouter = require('./routes/actor')
const cityRouter = require('./routes/city')


app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

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





app.use('/actor', actorRouter)

app.use('/city', cityRouter)

app.listen(3000, async () => {
    console.log("Server Started")
    await initDatabaseConnection()

})