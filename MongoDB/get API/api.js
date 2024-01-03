const api = require('./api-class')
const input = require('./api-dataClass')
const express = require('express')
const app = express()

let data,cond, result

app.get("/", async (req, res) => {
    let param = req.query.key
    switch (param){
        case 'findOne': {
            result = await api.find(input.findOne.data)
            console.log(result)
            res.send(result)
            console.log("API called : findOne")
            }
            break;
        case 'findAll': {
            result = await api.find(input.findAll.data)
            res.send(result)
            console.log("API called : findAll")
        }
            break;
        case 'insertOne': {
            result = await api.insertOne(input.insertOne.data)
            res.send(result)
            console.log("API called : insertOne")
        }  
                break;
        case 'insertMany': {
            result = await api.insertMany(input.insertMany.data)
            res.send(result)
            console.log("API called : insertMany")
        }   
                break;
        case 'updateOne': {
            cond = input.updateOne.cond
            data = input.updateOne.data
            result = await api.updateOne(cond,data)
            res.send(result)
            console.log("API called : updateOne")
        }   
                break;
        case 'updateMany': {
            cond = input.updateOne.cond
            data = input.updateOne.data
            result = await api.updateOne(cond,data)
            res.send(result)
            console.log("API called : updateMany")
        }   
                break;
        case 'deleteOne': {
            cond = input.deleteOne.cond
            result = await api.deleteOne(cond)
            res.send(result)
            console.log("API called : deleteOne")
        }   
                break;
        case 'deleteMany': {
            cond = input.deleteOne.cond
            result = await api.deleteOne(cond)
            res.send(result)
            console.log("API called : deleteMany")
        }   
                break;
        default : {
            res.send(`Something went wrong. Please choose the appropriate key parameter like ?key=''`)
            console.log("Case called : Default")
        }
    }

}).listen(5000)

// Create all crud operations