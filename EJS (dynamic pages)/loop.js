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
    res.render('loopHome', {user})      // notice that we changed the name of .ejs file here
}).listen(5001)
