const express = require('express')
const app = express()
const webPath = `${__dirname}/Static Web Pages`

app.get("",(req, res)=>{
    res.sendFile(`${webPath}/index.html`)
})

app.get("/contactUs",(req, res)=> {
    res.sendFile(`${webPath}/contact.html`)
})
app.get("/aboutMe",(req, res)=> {
    res.sendFile(`${webPath}/about.html`)
})
app.listen(4000)