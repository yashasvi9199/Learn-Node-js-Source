const connect = require('./dbConfig')
const express = require('express')
const app = express()

app.use(express.json())       //using middleware to get data in POST body in json format

app.post('/', async (req, res) => {
    console.log(req.body)
    let con = await connect()
    const result = await con.insertMany(req.body)   // I made sure to send the data in array from POSTMAN here to use insertMany
    res.send(result)
}).listen(5000, () => { console.log('CONNECTION STARTED AT PORT 5000') })


// alternatively this function can be used to check if the received data is an array or object
function isObject(data) {
    if (Array.isArray(data)) {
        return false
    } else if (typeof data === 'object' && data !== null) {
        return true
    } else {
        console.log('Received data is not an array or object.');
    }
}

/*
Why not use insertOne?
Because we do not know if user is sending one entry or multiple entries
*/