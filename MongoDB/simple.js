const {MongoClient} = require('mongodb')
// or use
// const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function getData(){
    let result = await client.connect()
    let db = result.db('ecom')
    let collection = db.collection('products')
    let response = await collection.find({}).toArray() 
    console.log(response)
}

getData()

/*
The reason for using async here is because the client returns a promise.
In a situation where we don't make it async, we will never get the result in API

The number of variables created is just splitting the simple MongoDB query into segments
=> db.<collection name>.find()

The reason for find({}).toArray()
=> the find() will search for a lot of data/object (thus {} in brackets to handle objects)
=> if we don't convert it in array the results will be a lot messy and not readable 
=> so using this is must
*/