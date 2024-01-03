const con = require('./mongoConfig')

con().then((collection) => {
    collection.find().toArray().then((data) => {    // .toArray also returns a promise which needs to be handled
        console.log(data);
    })
})

//or alternatively using async function/callback function here
const find = async () => {
    let data = await con()
    data = await data.find({prod:"X5"}).toArray()
    console.log(data)
}
find()