const express = require('express')
const app = express()

var home = `<h1>Hello User</h1><a href='/main'>Go to Main page</a>`

app.get("",(req, res)=>{
    res.send(home)
}).listen(4000)

app.get("/main",(req, res)=> {
    if(req.query.name === undefined){
        res.send(`<h3>Welcome to main page<h3> Please Type your name in URL for API`)
    }else{
        res.send(`<h1>Welcome ${req.query.name}, to our main page</h1>`)
    }
})

//similarly we can render different things in API including all other JS and HTML tags and functions