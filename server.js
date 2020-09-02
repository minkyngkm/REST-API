require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"))

app.use(bodyParser.json()) 
// 이거 위치!! app.use('/users', userRouter) 뒤에 썼더니 안됌...

const userRouter = require('./routes/users.js')
app.use('/users', userRouter)


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5000, () => { console.log( "The server connected")})