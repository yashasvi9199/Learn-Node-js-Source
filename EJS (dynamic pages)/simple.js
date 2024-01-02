const express = require('express')
const app = express()

app.set('view engine', 'ejs')   // this function is default
/*
view engine : is supposed to remain same as we are creating API and need to render a view page
ejs : is the parameter that shows which engine are we using
views folder : this needs to be same as every view engine will only render files from this folder only
file ext. ejs : this means that the engine will be able to load the files from the folder for ejs engine only. Other engine may not be able to render this file
*/

app.get("/profile",(req, res) =>{
    const user = {
        name: "Yash Haldiya",
        email: "yash@test.com",
        city: "Jaipur"
    }
    res.render('profile', {user})
}).listen(5000)

/*
Noticable change here is that the whole object was thrown as a parameter and was never imported in dymanic html page
It works similar to .jsp {java servelet page} but with a catch here
In ejs all data passed in {} brackets are accessible inside of <% %>
<% %> is used for server side scripting
and everything written inside <%= %> is rendered as it is on client-side
*/