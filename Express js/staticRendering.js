const express = require('express')
const path = require('path')

/*
I tried to avoid using another variable just to store executable express as function and wrote it directly
Only to encounter a problem that API was not called and no error was thrown
So, I decided to use an extra var for this purpose. 
*/

const app = express()
const dirPath = path.join(__dirname,'Static Web Pages')
const anchors = `<br /><a href='/about.html'>About us</a> <br /><a href='contact.html'>Contact us</a>`  
// note that complete name of the file id needed to be mentioned

/*
Somthing to be noted here
This section will load but I will not be able to render static page index.html
However, once I comment this section I can render index.html
*/
app.get("",(req, res)=>{
    res.send(`<h1>Welcome user</h1><h4>Please change the URL or use below links to change pages ${anchors}</h4>`)   //anchors also render in h4 tags
})

app.use(express.static(dirPath))
app.listen(4000)