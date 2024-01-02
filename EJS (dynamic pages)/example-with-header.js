const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/profile",(req, res) =>{
    const user = {
        name: "Yash Haldiya",
        email: "yash@test.com",
        city: "Jaipur",
        skills: ['java','React.js','HTML']
    }
    res.render('homeNew', {user})
}).listen(5001)
