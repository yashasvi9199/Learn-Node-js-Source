const http = require('http')

function dataConsole(req, res){
    res.write("<h1>Hello World</h1>")
    res.end()
}

http.createServer(dataConsole).listen(50001)