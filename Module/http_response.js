const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Welcome to homepage")
    res.end()
})

server.listen(5000)

// createServer creates a server for us with 2 parameters for a request and response {traditionally called res, req}
// listen makes your app work on a port, here localhost:5000

// alternative
// http.createServer((req, res) => {}).listen(5000)