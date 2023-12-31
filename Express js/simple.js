const express =  require('express')
const app = express()

const fs = require('fs')

app.get("", (req, res) => {
    res.send("Welcome at Homepage")
})

app.get("/about", (req, res) => {
    res.send("Hello at About us page")
})

app.listen(4000)