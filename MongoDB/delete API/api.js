const connect = require('./dbConfig')
const mongo = require('mongodb')    //for converting ObjectID
const express = require('express')
const app = express()

app.use(express.json())

app.delete('/:id', async (req, res) => {
    const con = await connect()
    const idParam = new mongo.ObjectId(req.params.id)     // since ID created by default always have an ObjectID, we need this to create one
    const result = await con.deleteOne({_id:idParam})   // make sure to add underscore as its _id and not id
    res.send(result)
}).listen(5000, ()=> {console.log("PORT RUNNING : 5000")})