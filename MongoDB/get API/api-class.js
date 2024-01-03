const connect = require('./dbConfig')

module.exports.find = async (item_obj) => {
    let con = await connect()
    try {
        const res = await con.find(item_obj).toArray()
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.insertOne = async (item_obj) => {
    let con = await connect()
    try {
        const res = await con.insertOne(item_obj)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.insertMany = async (item_obj) => {
    let con = await connect()
    try {
        const res = await con.insertMany(item_obj)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.updateOne = async (cond, item_obj) => {
    let con = await connect()
    try {
        const res = await con.updateOne(cond, [{ $set: item_obj }])
        console.log(res)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.updateMany = async (cond, item_obj) => {
    let con = await connect()
    try {
        const res = await con.updateMany(cond, [{ $set: item_obj }])
        console.log(res)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.deleteOne = async (cond) => {
    let con = await connect()
    try {
        const res = await con.deleteOne(cond)
        console.log(res)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}

module.exports.deleteMany = async (cond) => {
    let con = await connect()
    try {
        const res = await con.deleteMany(cond)
        console.log(res)
        return res
    } catch (error) {
        console.log("ERROR => ", error)
    }
}