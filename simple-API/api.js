const http = require('http')
const data = require('./data')

http.createServer((req,res) => {
    res.writeHead(200,'OK',{'Content-Type':'application/json'})
    res.write(JSON.stringify(data))     // since the data imported is just an object currently
    res.end()       // if response is not ended, it was observed that API didn't write anything in body but header was responded
}).listen(2100)