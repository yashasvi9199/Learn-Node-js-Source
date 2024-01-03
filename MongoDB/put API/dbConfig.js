const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

con = async () => {
    try{
        let result = await client.connect()
        let db = result.db('ecom')
        return db.collection("products")
    }catch(e){
        console.log("ERROR CONNECTING DATABASE => ",e)
    }

}

module.exports = con