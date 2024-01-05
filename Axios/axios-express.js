const axio = require('axios')
const express = require('express')
const app = express()

const api = async() => {
    try{
        const response  = await axio.get("https://jsonplaceholder.typicode.com/photos")
        let data = response.data[0]
        return {title:data.title, url: data.url}
    }catch(err){
        console.log(err)
    }
}

app.get('/', async (req, res) => {
    const data = await api()
    console.log(data)
    let html = `<img src='${data.url}' alt='${data.title}' \>`
    res.send(html)
}).listen(5000)