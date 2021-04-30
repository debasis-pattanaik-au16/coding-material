const express = require('express');
const app = express();

app.use(express.json())


app.get('/category', (req, res) => {

    const {name} = req.query

    if (name) {
        res.send(`Your name that server received = ${name}`)
        return 
    }
    
    res.send("Works")

})

app.get('/category/:categoryName', (req, res) => {
    
    console.log(req.params);
    console.log(req.params.categoryName);

    res.send("Called from Main category")

    
})

app.get('/category/:categoryName/:subCategory', (req, res) => {
    
    console.log(req.query.name)
    console.log(req.params);
    console.log(req.params.categoryName);

    res.send("Called from sub category")

})


app.get('/userInfo', (req, res) => {
    
    res.send("GET user info")

})

app.post('/userInfo', (req, res) => {

    console.log(req.body)


    // res.send(`Server changed your name to: ${req.body.name} Sinha`)

    const newData = {...req.body}
    newData.hasdasd = "Express"
    newData.hasdasd = "Express"
    newData.hasdasd = "Express"
    newData.hasdasd = "Express"
    newData.hasdasd = ['ASD',"asdasd",'ASDASD']
    newData.newName = "Velmurgan Pillai"
    console.log(newData)

    res.json(newData)

})

app.listen(3000, () => console.log('Server Started'))