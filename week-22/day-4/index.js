const express = require('express');
const app = express();


app.use(express.static('public'))


// app.get('/', (req, res) => {

//     res.render('home')

// })

// app.get('/about', (req, res) => {

//     // res.sendFile(__dirname + '/about.html')
// })


// app.get('/contact', (req, res) => {
//     const html = `
//         <div>
//             <h1>Contact Me</h1>
//         </div>
//         <a href='/'>Home</a>
//         <a href='/about'>About</a>
//     `
//     res.send(html)
// })



app.listen(3000, () => console.log('Server Started'))