const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5000, () => { console.log( "The server connected")})