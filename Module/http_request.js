const http = require('http')

const server = http.createServer((req, res) => {

    //localhost:5000
    if(req.url == '/'){      //checking if it is on homepage
        res.end("Welcome to homepage")
    }
    //localhost:5000/about
    if(req.url == '/about'){
        res.end("Here is something about us!")
    }
    //localhost:5000/error
    res.end(`
    <h1>Oops! Something went wrong</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>
    `)

})

server.listen(5000)