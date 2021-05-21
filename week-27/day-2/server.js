const {initDatabaseConnection} = require('./db')
const fs = require('fs/promises')
const express = require('express');
const app = express();
const expHbs = require('express-handlebars');
const expressUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const base64 = require('base64-arraybuffer')
const {Base64} = require('js-base64');
const actorRouter = require('./routes/actor')
const cityRouter = require('./routes/city')

app.engine('hbs', expHbs({ extname: 'hbs'  }))
app.set('view engine', 'hbs')


app.use(expressUpload())
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

cloudinary.config({
    cloud_name: 'attainu-test',
    api_key: '723624596189911',
    api_secret: 'nCRfrJTIPDIOUbqEfMm_JdSY29k',
})

app.use('/actor', actorRouter)

app.use('/city', cityRouter)


app.get('/', (req, res) => {

    res.render('home')

})


app.post('/test', async (req, res) => {

    console.log(req.body)
    console.log(req.files)

    /**
    
    
    const fileName = req.files.myFile.name

    //move to my local file system
    const moved = await req.files.myFile.mv(`./uploads/${fileName}`)
    console.log("🚀 ~ file: server.js ~ line 56 ~ app.post ~ moved", moved)

    //upload the file to cloudinary
    const uploadResult = await cloudinary.uploader.upload(`./uploads/${fileName}`)
    console.log("🚀 ~ file: server.js ~ line 60 ~ app.post ~ uploadResult", uploadResult)

    await fs.unlink(`./uploads/${fileName}`)

    console.log("Removed")

    */
try {
    
    
    // req.files.myFile.data
    
    // const bas64FormattedString = Base64.encode(req.files.myFile.data)
    let base64String = req.files.myFile.data.toString('base64') //btoa(String.fromCharCode(...new Uint8Array(req.files.myFile.data)));
    const uploadResult  = await cloudinary.uploader.upload(`data:${req.files.myFile.mimetype};base64,${base64String}`, { resource_type: 'raw' })
    // btoa
    res.json(uploadResult);

    } catch (error) {
        console.log(error)
        res.send("Error")
    }
   
})


app.listen(3000, async () => {
    console.log("Server Started")
    await initDatabaseConnection()

})