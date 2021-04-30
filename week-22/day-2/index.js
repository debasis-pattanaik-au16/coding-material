const express = require('express');
const app = express();
const mathRouter = require('./routes/math');
const userRouter = require('./routes/user');

app.use('/math', mathRouter)
app.use('/user', userRouter)

app.listen(3000, () => console.log('Server Started'))