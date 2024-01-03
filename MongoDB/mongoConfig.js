const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function con(){
    let result = await client.connect()
    let db = result.db('ecom')
    return db.collection('products')        // remember that this part returns a promise so we need to handle that with'.then(() =>{})
}

module.exports = con