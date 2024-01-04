const api = require('./api-class')
const express = require('express')
const app = express()

app.get("/:key", async(req, res)=> {
    let key = req.params.key
    const result = await api.find({
        $or: [
            {prod: {$regex:key}},
            {brand: {$regex:key}}
        ]
    })
    console.log(result)
    res.send(result)
}).listen(5000)

// $or : performs a collection/index scan
// $regex : perform regex {regular expressions} in scan