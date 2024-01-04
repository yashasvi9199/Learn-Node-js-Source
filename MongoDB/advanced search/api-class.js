const connect = require('./mongoConfig')

module.exports.find = async (data) => {
    const con = await connect()
    try{
        const result = await con.find(data).toArray()
        return result 
    }catch(e){console.log("ERROR => ", e)}
}